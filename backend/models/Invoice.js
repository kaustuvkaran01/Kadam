const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema(
  {
    // user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    header_key: { type: String },
    email: { type: String },
    fund: { type: mongoose.Schema.Types.ObjectId, ref: "Donate" },
    amount: { type: Number, required: true },
    captured: { type: Boolean },
    order_id: { type: String },
    receipt: { type: String },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { strict: false }
);

module.exports = mongoose.model("Invoice", InvoiceSchema);
