const mongoose = require("mongoose");

const DonateSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  fund: [{ type: mongoose.Schema.Types.ObjectId, ref: "Donate" }],
  email: { type: mongoose.Schema.Types.String, ref: "User", required: true },
});

module.exports = mongoose.model("Donate", DonateSchema);
