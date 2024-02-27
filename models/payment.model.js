const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  type: {
    type: String,
    require: true,
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "orderSchema",
  },
  totalAmount: {
    type: String,
    require: true,
  },
  date: {
    type: Date, 
    required: true,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
  },
});
const payment = mongoose.model("paymentSchema", paymentSchema);
module.exports = payment;
