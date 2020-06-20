const express = require("express");
const userRouter = express.Router();
const passport = require("passport");
const passportConfig = require("../passport");
const JWT = require("jsonwebtoken");
const User = require("../models/User");
const Donate = require("../models/Donate");

const signToken = (userID) => {
  return JWT.sign(
    {
      iss: "KADAMBEST",
      sub: userID,
    },
    "KADAMBEST",
    { expiresIn: "1h" }
  );
};

userRouter.post("/register", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err)
      res
        .status(500)
        .json({ message: { msgBody: "Error has occured", msgError: true } });
    if (user)
      res
        .status(400)
        .json({ message: { msgBody: "Username taken", msgError: true } });
    else {
      const newUser = new User({ username, password });
      newUser.save((err) => {
        if (err || password == null)
          res.status(500).json({
            message: { msgBody: "Error has occured", msgError: true },
          });
        else {
          res.status(201).json({
            message: {
              msgBody: "Account created Successfully",
              msgError: true,
            },
          });
        }
      });
    }
  });
});

userRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    if (req.isAuthenticated()) {
      const { _id, username } = req.user;
      const token = signToken(_id);
      res.cookie("access_token", token, { httpOnly: true, sameSite: true });
      res.status(200).json({ isAuthenticated: true, user: { username } });
    }
  }
);

userRouter.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    req.logout();
    res.clearCookie("access_token");
    res.json({ user: { username: "", role: "" }, success: true });
  }
);

//DEVELOPMENT
userRouter.get(
  "/authenticated",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { username, isVolunteer, isAdmin } = req.user;
    res.status(200).json({
      isAuthenticated: true,
      user: { username, isVolunteer, isAdmin },
    });
  }
);

//Volunteer blog approval
userRouter.post(
  "/blogs",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.isAuthenticated() && req.user.isVolunteer) {
      const { title, author, description } = req.body;
      Blog.create({ title, author, description })
        .then((blog) => res.json({ msg: "Blog added successfully" }))
        .catch((err) =>
          res.status(400).json({ error: "Unable to add this blog" })
        );
    } else {
      res.status(403).json({
        message: { msgBody: "You're not a volunteer,go away", msgError: true },
      });
    }
  }
);

module.exports = userRouter;
