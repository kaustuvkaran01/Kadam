const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema(
  {
    // user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    fund: { type: mongoose.Schema.Types.ObjectId, ref: "Donate" },
    payload: [mongoose.Schema.Types.Mixed],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { strict: false }
);

module.exports = mongoose.model("Invoice", InvoiceSchema);
