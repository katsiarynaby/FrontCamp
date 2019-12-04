const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/user');

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
            User
                .findOne({ username: username })
                .then(user => {
                    if (!user) {
                        return done(null, false, { message: 'This email isn\'t registred' });
                    }

                    if (password == user.password) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: 'Password is invalid' });
                    }
                })
                .catch(err => console.log(err));
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
};
