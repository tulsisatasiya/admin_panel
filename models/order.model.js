const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  totalBill: {
    type: Number,
    require: true,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"restSchema",
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "menuSchema",
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
  },
  date: {
    type: Date, 
    required: true,
    default: Date.now
  }

});
const order = mongoose.model("orderScehma", orderSchema);
module.exports = order;
