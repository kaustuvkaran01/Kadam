const mongoose = require("mongoose");

const DonateSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  fund: { type: mongoose.Schema.Types.ObjectId, ref: "Donate" },
  donatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Donate", DonateSchema);
