var express = require('express');
var router = express.Router();

var admin = require('firebase-admin');
var db = admin.firestore();

function hasPermission(req, res, next) {
    var permissions = req.user.permissions.events;
    switch (req.method) {
        case "GET": {
            if (permissions.read) return next();
            break;
        }
        case "POST": {
            if (permissions.create) return next();
            break;
        }
        case "PUT": {
            if (permissions.update) return next();
            break;
        }
        case "DELETE": {
            if (permissions.delete) return next();
            break;
        }
    }
    if (req.user.permissions.admin) return next();

    return res.status(401).send({status: 401, message: "Unauthorized"})
}

/**
 * GET to read
 * */
router.get('/', hasPermission, (req, res) => {
    const user = req.user;
    const limit = req.query.limit ? parseInt(req.query.limit) : null;

    const now = new Date();
    const startDate = req.query.startDate ? new Date(parseInt(req.query.startDate)) : new Date(now.getFullYear(), now.getMonth(), 1);
    const endDate = req.query.endDate ? new Date(parseInt(req.query.endDate)) : new Date(now.getFullYear(), now.getMonth() + 1, 0);

    const query = db.collection(`venues/${user.venueId}/events`);
    limit ? query.limit(limit) : null;
    endDate ? query.where("endDate", "<=", endDate) : null;
    startDate ? query.where("startDate", ">=", startDate) : null;

    return query.get().then((snapshot) => {
        let list = [];
        snapshot.forEach((doc) => {
            let data = doc.data();
            data.id = doc.id;
            list.push(data);
        });
        return res.status(200).send({status: 200, query: req.query, events: list});
    }).catch((err) => res.status(200).send({err: err}));
});

/**
 *  POST to create
 *  */
router.post('/', hasPermission, function (req, res) {
    var user = req.user;

    return res.status(200).send({status: 200, message: "you're in"});
});

/**
 *  PUT to update
 *  */
router.put('/', hasPermission, function (req, res) {
    var user = req.user;

    return res.status(200).send({status: 200, message: "you're in"});
});

/**
 *  DELETE to delete
 *  */
router.delete('/', hasPermission, function (req, res) {
    var user = req.user;

    return res.status(200).send({status: 200, message: "you're in"});
});


module.exports = router;