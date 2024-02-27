const { orderSchema } = require("../models");

const addOrder = (body) => {
  return orderSchema.create(body);
};
const getOrder = () => {
  return orderSchema
    .find()
    .populate("restaurant", { restName: 1, location: 1 })
    .populate("user", { firstName: 1, contactNumber: 1 })
    .populate("menu", { itemName: 1, price: 1 })
};

const deleteOrder = (id) => {
  return orderSchema.findByIdAndDelete(id);
};
const updateOrder = (id, body) => {
  return orderSchema.findByIdAndUpdate(id, body);
};

module.exports = {
  addOrder,
  getOrder,
  deleteOrder,
  updateOrder,
};
