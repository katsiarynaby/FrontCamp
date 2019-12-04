const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get("/auth/facebook", passport.authenticate("facebook"));

router.get(
  "/auth/facebook/callback", 
  passport.authenticate("facebook", {
    successRedirect: "/welcome",
   failureRedirect: "/auth/facebook"})
);

router.get('/welcome', (req, res, next) => {
  res.status(200).json({message: 'Welcome to abroad'});
});

module.exports = router;