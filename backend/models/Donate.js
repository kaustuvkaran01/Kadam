const mongoose = require("mongoose");

const DonateSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Donate", DonateSchema);
