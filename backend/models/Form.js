const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  title: String,
  campaign: String,
  questions: [],
});
mongoose.model("Form", FormSchema);

module.exports = Form = mongoose.model("form", FormSchema);
