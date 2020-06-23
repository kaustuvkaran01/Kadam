// Script for adding admin
const Admin = require("../models/User");
const mongoose = require("mongoose");
const keys = require("../config/keys");
mongoose.connect(keys.mongodb.mongoURI);

const adminInput = {
  email: "email@gmail.com",
  username: "KADAM",
  password: "123123",
  isAdmin: true,
};

const admin = new Admin(adminInput);
admin.save((err, document) => {
  if (err) console.log(err);
  console.log(document);
});
