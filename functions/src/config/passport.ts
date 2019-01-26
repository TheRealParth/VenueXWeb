import * as admin from 'firebase-admin';
const db = admin.firestore();

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('../config/jwt');

module.exports = (passport) => {

    // let opts = {
    //     jwtFromRequest: ExtractJwt.fromAuthHeader({failmessage: 'missing token'}),
    //     secretOrKey: config.secret
    // };
    // passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    //     console.log(jwt_payload)
    //     db.doc(`venues/${jwt_payload.venueId}/users/${jwt_payload.id}`).get().then((snap) => {
    //         var u = snap.data();
    //         u.password = undefined;
    //         u.venueId = jwt_payload.venueId;
    //         if (!u) return done("invalid session, please login again", null);
    //
    //         return done(null, u);
    //     }).catch((err) => done(err, null));
    // }));

    // // Passport needs to be able to serialize and deserialize users to support persistent login sessions
    // passport.serializeUser((user, done) => done(null, user));
    //
    // passport.deserializeUser((user, done) => {
    //     try {
    //         db.doc(`venues/${user.venueId}/users/${user.id}`).get().then((snap) => {
    //             var u = snap.data();
    //             u.password = undefined;
    //             u.venueId = user.venueId;
    //             if (!u) return done("invalid session, please login again", null);
    //
    //             return done(null, u);
    //         }).catch((err) => done("User does not exist", null));
    //     } catch (err) {
    //         return done("Couldn't deserialize user... invalid session" + err, null);
    //     }
    // });
    //
    // passport.use('login', new LocalStrategy({
    //     usernameField: 'email',
    //     passwordField: 'password',
    //     passReqToCallback: true
    // }, (req, username, password, done) => {
    //
    //     if (!username || !password) return done(null, false, 'Missing Fields');
    //
    //     return db.collection(`venues/${req.body.venueId}/users`).where("email", "==", username).limit(1).get().then((snap) => {
    //         let list = [];
    //         snap.forEach((doc) => {
    //             let data = doc.data();
    //             data.id = doc.id;
    //             data.venueId = req.body.venueId;
    //             list.push(data);
    //         });
    //         let user = list[0];
    //         // console.log(user);
    //
    //         if (user) {
    //             return encrypt.validatePassword(password, user.password, (err, res) => {
    //                 if (res) {
    //                     user.password = undefined;
    //                     return done(null, user);
    //                 } else {
    //                     return done(null, false, 'Invalid password.');
    //                 }
    //             });
    //         }
    //
    //         return done(null, user);
    //     }).catch((err) => done(null, false, 'Invalid username or password.'));
    // }));
    //
    // passport.use('signup', new LocalStrategy({
    //     usernameField: 'email',
    //     passwordField: 'password',
    //     passReqToCallback: true
    // }, (req, email, password, done) => {
    //     // Check if all the required fields are gotten
    //
    //     var permissions = req.body.permissions ? req.body.permissions : {};
    //     permissions.admin = permissions.admin ? permissions.admin : false;
    //     permissions.events = permissions.events ? permissions.events : {
    //         create: false,
    //         read: false,
    //         update: false,
    //         delete: false
    //     };
    //     permissions.staff = permissions.staff ? permissions.staff : {
    //         create: false,
    //         read: false,
    //         update: false,
    //         delete: false
    //     };
    //     permissions.billing = permissions.billing ? permissions.billing : {
    //         create: false,
    //         read: false,
    //         update: false,
    //         delete: false
    //     };
    //
    //     var fullName = req.body.fullName ? req.body.fullName : "";
    //     var picture = req.body.picture ? req.body.picture : "https://placehold.it/100x100";
    //
    //     if (!email || !password || !req.body.venueId) {
    //         return done(null, false, 'Missing Fields');
    //     }
    //
    //     return db.collection(`venues/${req.body.venueId}/users`).where("email", '==', email).limit(1).get().then((snap) => {
    //         var res = snap.docs;
    //         // console.log(res)
    //         if (!res[0]) {
    //             return encrypt.saltAndHash(password, function (hash) {
    //                 return db.collection(`venues/${req.body.venueId}/users`).add({
    //                     fullName: fullName,
    //                     picture: picture,
    //                     email: email,
    //                     password: hash,
    //                     permissions: permissions,
    //                     updated: admin.firestore.FieldValue.serverTimestamp(),
    //                     created: admin.firestore.FieldValue.serverTimestamp()
    //                 }).then((doc) => {
    //                     var user = {
    //                         id: doc.id,
    //                         email: email,
    //                         venueId: req.body.venueId
    //                     };
    //                     return done(null, user, 'Signup successful');
    //                 }).catch((err) => done(null, false, err));
    //             })
    //         } else {
    //             return done(null, false, "Can't create user, that email already exists");
    //         }
    //     }).catch((err) => done(null, false, err));
    //
    // }));

};