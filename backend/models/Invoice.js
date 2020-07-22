const Fund = require("./Funds");
const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    header_key: { type: String },
    email: { type: String },
    fund: { type: mongoose.Schema.Types.ObjectId, ref: "Fund" },
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

InvoiceSchema.pre("save", function (next) {
  console.log(this.fund);
  Fund.findById(this.fund)
    .exec()
    .then((result) => {
      result.collected += this.amount;
      console.log(result);
      if (collected > target) {
        result.isCompleted = true;
      }
      result.save();
    })
    .catch((err) => {
      console.log(err);
    });
  next();
});

module.exports = mongoose.model("Invoice", InvoiceSchema);
