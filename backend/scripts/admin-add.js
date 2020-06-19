// Script for adding admin
const Admin = require("./models/User");
const mongoose = require("mongoose");
mongoose.connect("localhost:27017/mernauth");

const adminInput = {
  username: USER_ID,
  password: PASSWORD,
  isAdmin: true,
};

const admin = new Admin(adminInput);
admin.save((err, document) => {
  if (err) console.log(err);
  console.log(document);
});
