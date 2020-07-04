const express = require("express");
const router = express.Router();
const Blog = require("../models/Blogs");
const Fund = require("../models/Funds");
const User = require("../models/User");

//GET request visible to all

router.get("/", (req, res) => res.send("Hello world!"));

router.get("/blogs", (req, res) => {
  console.log("blog");
  Blog.find({ isApproved: true })
    .then((blogs) => res.json(blogs))
    .catch((err) => res.status(404).json({ noblogsfound: "No Blogs found" }));
});

router.get("/funds", (req, res) => {
  console.log("fund");
  Fund.find({ isApproved: true })
    .then((blogs) => res.json(blogs))
    .catch((err) =>
      res.status(404).json({ noblogsfound: "No Fundraiser found" })
    );
});

router.get("/funds/:id", (req, res) => {
  console.log("fund");
  Fund.find({ isApproved: true, _id: req.params.id })
    .then((blogs) => res.json(blogs))
    .catch((err) =>
      res.status(404).json({ noblogsfound: "No Fundraiser found" })
    );
});

module.exports = router;
