const mongoose = require("mongoose");

const FundSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  campaign: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  target: {
    type: Number,
  },
  collected: {
    type: Number,
  },
  published_date: {
    type: Date,
  },
  updated_date: {
    type: Date,
    default: Date.now(),
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
});

module.exports = Fund = mongoose.model("fund", FundSchema);
