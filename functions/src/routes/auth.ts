import * as admin from 'firebase-admin';

const db = admin.firestore();
import * as express from 'express';

const router = express.Router();
const encrypt = require('../util/encrypt');
import * as jwt from 'jsonwebtoken';

const config = require('../config/jwt');
import * as passport from 'passport';

require('../config/passport')(passport);

function isAuthenticated(req, res, next) {
    passport.authenticate('jwt', {session: false}, function (err, user, info) {
        if (err) return next(err);
        if (!user) return res.status(401).send({success: false, message: "Unauthorized", err: info});

        req.user = user;   // Forward user information to the next middleware
        next();
    })(req, res, next);
}

router.get('/', isAuthenticated, (req: any, res: any, next: any) => {
    return res.send({success: !!req.user, user: req.user, message: req.user ? "You're logged in" : "Please login"});
});

router.get('/validateToken', isAuthenticated, (req: any, res: any, next: any) => {
    return res.send({success: !!req.user, user: req.user, message: req.user ? "You're logged in" : "Please login"});
});

/**
 * request that handles the login of the user
 *
 * in the post body include the following
 * email: {user's email}
 * password: {user's password}
 * */
router.post('/login', (req: any, res: any, next: any) => {
    var email = req.body.email;
    var password = req.body.password;

    return db.collection(`venues/${req.body.venueId}/users`).where("email", "==", email).limit(1).get()
        .then((snap) => {
            let list = [];
            snap.forEach((doc) => {
                let data = doc.data();
                data.id = doc.id;
                data.venueId = req.body.venueId;
                list.push(data);
            });
            let user = list[0];
            console.log(user);

            if (user) {
                return encrypt.validatePassword(password, user.password, (err, valid) => {
                    try {
                        if (valid) {
                            admin.auth().setCustomUserClaims(user.id, {permissions:user.permissions});
                            return admin.auth().createCustomToken(user.id, {user})
                                .then((customToken) => {
                                    user.password = undefined;
                                    return res.send({
                                        success: true,
                                        message: "success",
                                        access_token: customToken,
                                        user: user
                                    })
                                })
                                .catch((error) => res.send({success: false, message:"admin", error: error}));
                        } else {
                            return res.send({success: false, error: "invalid username or password"});
                        }
                    } catch (e) {
                        return res.send({success: false, message:"trycatch", error: e})
                    }
                });
            }
            return res.send({success: false, error: "invalid username or password"});

        }).catch((err) => res.send({success: false,message:"asdf", error: err}));
});

/**
 * request that handles the signup of the user
 *
 * in the post body include the following
 *
 * email: {user's email}
 * password: {user's password}
 * */
router.post('/signup', (req: any, res: any, next: any) => {

    var email = req.body.email;
    var password = req.body.password;

    var permissions = req.body.permissions ? req.body.permissions : {};
    permissions.admin = permissions.admin ? permissions.admin : false;
    permissions.events = permissions.events ? permissions.events : {
        create: false,
        read: false,
        update: false,
        delete: false
    };
    permissions.staff = permissions.staff ? permissions.staff : {
        create: false,
        read: false,
        update: false,
        delete: false
    };
    permissions.billing = permissions.billing ? permissions.billing : {
        create: false,
        read: false,
        update: false,
        delete: false
    };

    var fullName = req.body.fullName ? req.body.fullName : "";
    var picture = req.body.picture ? req.body.picture : "https://placehold.it/100x100";

    if (!email || !password || !req.body.venueId) {
        return res.send({success: false, error: "Missing Fields"});
    }

    return db.collection(`venues/${req.body.venueId}/users`).where("email", '==', email).limit(1).get().then((snap) => {
        var result = snap.docs;
        // console.log(res)
        if (!result[0]) {
            return encrypt.saltAndHash(password, (hash) => {
                return db.collection(`venues/${req.body.venueId}/users`).add({
                    fullName: fullName,
                    picture: picture,
                    email: email,
                    password: hash,
                    permissions: permissions,
                    updated: admin.firestore.FieldValue.serverTimestamp(),
                    created: admin.firestore.FieldValue.serverTimestamp()
                }).then((doc) => {
                    var user = {
                        id: doc.id,
                        email: email,
                        permissions: permissions,
                        venueId: req.body.venueId
                    };

                    return admin.auth().createCustomToken(user.id, {user})
                        .then((customToken) => {
                            admin.auth().setCustomUserClaims(user.id, {permissions:permissions})
                            return res.send({
                                success: true,
                                message: "success",
                                access_token: customToken,
                                user: user
                            })
                        })
                        .catch((error) => res.send({success: false, error: error}));
                }).catch((err) => res.send({success: false, error: err}));
            })
        } else {
            return res.send({success: false, error: "Can't create user, that email already exists"});
        }
    }).catch((err) => res.send({success: false, error: err}));
});

module.exports = router;
