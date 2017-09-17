const passport = require('passport');
const express = require('express');
const router = express.Router();

router.post('/', function (req, res, next) {
    // Login Management via PassportJS
    passport.authenticate('local', function (err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/'); }
        req.logIn(user, function (err) {
            if (err) { return next(err); }
            return res.redirect('/users/');
        });
    })(req, res, next);
});

module.exports = router;
