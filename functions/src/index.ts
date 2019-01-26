import * as functions from 'firebase-functions';

var serviceAccount = require("../private_key.json");

const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://venuex-dreamstack.firebaseio.com"
});


var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var passport = require('passport');
require('./config/passport')(passport);

var app = express();

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization, Accept");
    res.header('Cache-Control', 'no-store, no-cache');
    res.setHeader('Content-Type', 'application/json');

    // intercept OPTIONS method
    ('OPTIONS' == req.method) ? res.send(200) : next();

});

//checks to see if the
function isAuthenticated(req, res, next) {
    passport.authenticate('jwt', {session: false}, function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).send({
                success: false,
                message: "Unauthorized",
                err: info
            });
        }
        req.user = user;   // Forward user information to the next middleware
        next();
    })(req, res, next);
}

//setting the routes
app.use('/auth', require('./routes/auth')); //routes that are exposed
app.use('/events', isAuthenticated, require('./routes/events'));

// catch 404 and forward to error handler
app.use(function (req, res) {
    res.status(404).send({success: false, message: "Route not found!"});
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(500).send({success: false, message: "Server Error!", err: err});
    console.log(err);
});

export const api = functions.https.onRequest(app);
