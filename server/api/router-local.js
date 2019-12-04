const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

const User = require('./model/user');

router.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        username: username,
        password: password
    });
    User.findOne({ username: username }, (err, user) => {
        user ? res.send("User with this login exist") :
            newUser.save(() => {
                res.send("Done");
            });
    })
});

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/successfullogin',
        failureRedirect: '/errorlogin',
        failureFlash: true
    })
);

router.get('/logout', (req, res, next) => {
    req.logout();
    req.redirect('/login');
  });

router.get('/successfullogin', (req, res) => {
    res.send("Successful login")
});

router.get('/errorlogin', (req, res) => {
    res.send('Something wrong');
});

module.exports = router;