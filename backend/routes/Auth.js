const express = require("express");
const passport = require("passport");
const router = express.Router();
const JWT = require("jsonwebtoken");

const signToken = (userID) => {
  return JWT.sign(
    {
      iss: "KADAMBEST123",
      sub: userID,
    },
    "KADAMBEST",
    { expiresIn: "1h" }
  );
};

// GOOGLE
// @desc    Auth with Google
// @route   GET /auth/google
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    if (req.isAuthenticated()) {
      const { _id } = req.user;
      const token = signToken(_id);
      res.cookie("access_token", token, { httpOnly: true, sameSite: true });
      res.redirect("http://localhost:3000/profile");
      // res.status(200).json({ isAuthenticated: true, user: { username } });
    }
  }
);

//FACEBOOK
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

// @desc    Facebook auth callback
// @route   GET /auth/facebook/callback
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/" }),
  (req, res) => {
    if (req.isAuthenticated()) {
      const { _id } = req.user;
      const token = signToken(_id);
      res.cookie("access_token", token, { httpOnly: true, sameSite: true });
      res.redirect("/blogs");
    }
  }
);

module.exports = router;
