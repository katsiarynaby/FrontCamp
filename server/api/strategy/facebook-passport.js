const FacebookStrategy = require('passport-facebook').Strategy;

const User = require('../model/user');

module.exports = function (passport) {
    passport.use(new FacebookStrategy({
        clientID: '2216470965121575',
        clientSecret: '6fccd1c7ac3ed057a766720b2f9b7ab5',
        callbackURL: "http://localhost:3000/auth/facebook/callback",
        profileFields: ["email", "name"]
    },
        function (accessToken, refreshToken, profile, cb) {
            return cb(null, profile);
        }
    ))

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (obj, done) {
        done(null, obj);
    });
}