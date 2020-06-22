const express = require("express");
const router = express.Router();
const Blog = require("../models/Blogs");

//GET request visible to all

router.get("/", (req, res) => res.send("Hello world!"));

router.get("/blogs", (req, res) => {
  console.log("blog");
  Blog.find({ isApproved: true })
    .then((blogs) => res.json(blogs))
    .catch((err) => res.status(404).json({ noblogsfound: "No Blogs found" }));
});

module.exports = router;
