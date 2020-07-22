const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema({
  // user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  form: { type: mongoose.Schema.Types.ObjectId, ref: "Form" },
  name: String,
  campaign: String,
  age: Number,
  isPaid: { Boolean, default: false },
  answers: [],
});
mongoose.model("Volunteer", VolunteerSchema);

module.exports = Volunteer = mongoose.model("volunteer", VolunteerSchema);
