const express = require("express");
const adminRouter = express.Router();
const passport = require("passport");
const passportConfig = require("../passport");
const JWT = require("jsonwebtoken");
const User = require("../models/User");
const Donate = require("../models/Donate");
const Blog = require("../models/Blogs");
const Fund = require("../models/Funds");

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

adminRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
      const { _id, username } = req.user;
      const token = signToken(_id);
      res.cookie("access_token", token, { httpOnly: true, sameSite: true });
      res.status(200).json({ isAuthenticated: true, user: { username } });
    } else {
      res.status(500).json({
        message: {
          msgBody: "You are not an admin login thru user/login",
          msgError: true,
        },
      });
    }
  }
);

//Development
adminRouter.get(
  "/index",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.isAuthenticated());
    console.log(req.user.isAdmin);
    if (req.isAuthenticated() && req.user.isAdmin) {
      res
        .status(200)
        .json({ message: { msgBody: "Admin Welcome", msgError: false } });
    } else
      res.status(403).json({
        message: { msgBody: "You're not an admin,go away", msgError: true },
      });
  }
);

adminRouter.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.isAuthenticated()) {
      if (req.user.isAdmin) {
        req.logout();
        res.clearCookie("access_token");
        res.json({ user: { username: "", role: "" }, success: true });
      } else {
        res.status(404).json({
          message: { msgBody: "Logout using user/logout", msgError: true },
        });
      }
    } else {
      res.status(404).json({
        message: {
          msgBody: "Please login first using user/login",
          msgError: true,
        },
      });
    }
  }
);

//DEVELOPMENT

adminRouter.get(
  "/authenticated",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { username } = req.user;
    res.status(200).json({ isAuthenticated: true, user: { username } });
  }
);

//ADMIN BLOG

//Post a blog
adminRouter.post(
  "/blogs",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
      req.body.isApproved = true;
      console.log(req.body);
      const published_date = Date.now();
      const { title, author, description, isApproved } = req.body;
      Blog.create({ title, author, description, isApproved, published_date })
        .then((blog) => res.json({ msg: "Blog added successfully" }))
        .catch((err) =>
          res.status(400).json({ error: "Unable to add this blog" })
        );
    } else {
      res.status(403).json({
        message: { msgBody: "You're not an admin,go away", msgError: true },
      });
    }
  }
);

//Update a blog
adminRouter.put(
  "/blogs/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
      Blog.findByIdAndUpdate(req.params.id, req.body)
        .then((blog) => res.json({ msg: "Updated successfully" }))
        .catch((err) =>
          res.status(400).json({ error: "Unable to update the Database" })
        );
    } else {
      res.status(403).json({
        message: { msgBody: "You're not an admin,go away", msgError: true },
      });
    }
  }
);

//Delete a blog
adminRouter.delete(
  "/blogs/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
      Blog.findByIdAndRemove(req.params.id, req.body)
        .then((blog) => res.json({ mgs: "Blog entry deleted successfully" }))
        .catch((err) => res.status(404).json({ error: "No such blog" }));
    } else {
      res.status(403).json({
        message: { msgBody: "You're not an admin,go away", msgError: true },
      });
    }
  }
);

//Approve a blog
adminRouter.put(
  "/blogs/approve/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
      req.body.isApproved = true;
      Blog.findByIdAndUpdate(req.params.id, req.body)
        .then((blog) => res.json({ msg: "Updated successfully" }))
        .catch((err) =>
          res.status(400).json({ error: "Unable to update the Database" })
        );
    } else {
      res.status(403).json({
        message: { msgBody: "You're not an admin,go away", msgError: true },
      });
    }
  }
);

//Hide a blog
adminRouter.put(
  "/blogs/hide/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.isAuthenticated() && req.user.isAdmin && req.blog.isApproved) {
      req.body.isApproved = false;
      Blog.findByIdAndUpdate(req.params.id, req.body)
        .then((blog) => res.json({ msg: "Updated successfully" }))
        .catch((err) =>
          res.status(400).json({ error: "Unable to update the Database" })
        );
    } else {
      res.status(403).json({
        message: { msgBody: "You're not an admin,go away", msgError: true },
      });
    }
  }
);

//Volunteer
adminRouter.put(
  "/volunteer/approve/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
      req.body.isVolunteer = true;
      User.findByIdAndUpdate(req.params.id, req.body)
        .then((blog) => res.json({ msg: "Updated successfully" }))
        .catch((err) =>
          res.status(400).json({ error: "Unable to update the Database" })
        );
    } else {
      res.status(403).json({
        message: { msgBody: "You're not an admin,go away", msgError: true },
      });
    }
  }
);

// ADMIN FUNDRAISER

//Post a fundraiser

adminRouter.post(
  "/funds",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
      console.log(req.body);
      const { title, description, target, campaign } = req.body;
      const published_date = Date.now();
      console.log(published_date);
      Fund.create({
        title,
        description,
        target,
        campaign,
        published_date,
      })
        .then((blog) => res.json({ msg: "Fundraiser added successfully" }))
        .catch((err) =>
          res.status(400).json({ error: "Unable to add Fundraiser" })
        );
    } else {
      res.status(403).json({
        message: { msgBody: "You're not an admin,go away", msgError: true },
      });
    }
  }
);

//Update Fundraiser

adminRouter.put(
  "/funds/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
      Fund.findByIdAndUpdate(req.params.id, req.body)
        .then((blog) => res.json({ msg: "Updated successfully" }))
        .catch((err) =>
          res.status(400).json({ error: "Unable to update the Database" })
        );
    } else {
      res.status(403).json({
        message: { msgBody: "You're not an admin,go away", msgError: true },
      });
    }
  }
);

//Delete fundraiser

adminRouter.delete(
  "/funds/hide/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
      Fund.findByIdAndRemove(req.params.id, req.body)
        .then((blog) =>
          res.json({ mgs: "Fundraiser entry deleted successfully" })
        )
        .catch((err) => res.status(404).json({ error: "No such Fundraiser" }));
    } else {
      res.status(403).json({
        message: { msgBody: "You're not an admin,go away", msgError: true },
      });
    }
  }
);

//Hide a fundraiser
adminRouter.put(
  "/funds/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
      req.body.isApproved = false;
      Fund.findByIdAndUpdate(req.params.id, req.body)
        .then((blog) => res.json({ msg: "Updated successfully" }))
        .catch((err) =>
          res.status(400).json({ error: "Unable to update the Database" })
        );
    } else {
      res.status(403).json({
        message: { msgBody: "You're not an admin,go away", msgError: true },
      });
    }
  }
);
module.exports = adminRouter;
