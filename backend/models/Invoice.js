const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  order_id: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  donatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Invoice", InvoiceSchema);
