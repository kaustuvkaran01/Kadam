const express = require("express");
const router = express.Router();
const Blog = require("../models/Blogs");
const Fund = require("../models/Funds");
const User = require("../models/User");
const Volunteer = require("../models/Volunteer");
const Form = require("../models/Form");
const File = require("../models/File");
const path = require("path");
const multer = require("multer");
const fileUpload = require("express-fileupload");

//GET request visible to all

router.get("/", (req, res) => res.send("Hello world!"));

router.get("/blogs", (req, res) => {
  console.log("blog");
  Blog.find({ isApproved: true })
    .then((blogs) => res.json(blogs))
    .catch((err) => res.status(404).json({ noblogsfound: "No Blogs found" }));
});
router.get("/blogs/:id", (req, res) => {
  Blog.findById(req.params.id)
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

router.post("/volunteer", (req, res) => {
  console.log("Volunteer");
  const { form, name, age, answers } = req.body;
  Volunteer.create({ form, name, age, answers })
    .then((blog) => res.json({ msg: "Volunteer added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add this Form" }));
});

router.post("/form", (req, res) => {
  console.log("Form");
  Form.create(req.body)
    .then((blog) => res.json({ msg: "Form added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add this Form" }));
});

router.get("/get_form/:id", (req, res) => {
  console.log("Volunteer");
  Form.findById(req.params.id)
    .then((form) => res.json(form))
    .catch((err) => res.status(404).json({ noblogsfound: "No Form found" }));
});

//File upload

router.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;
  file.name = "image1.jpg";

  file.mv(`${__dirname}/../public/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/${file.name}` });
  });
});

module.exports = router;
