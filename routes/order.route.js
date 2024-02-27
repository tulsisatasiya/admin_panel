const express = require("express");
const route = express.Router();
const { orderController } = require("../controllers");
const validate = require("../middlewares/validate");
const orderValidation = require("../validation/order.validate");

route.post(
  "/add",
  validate(orderValidation.addOrder),
  orderController.addOrder
);
route.get("/get", orderController.getOrder);
route.put("/update/:id", validate(orderValidation.addOrder), orderController.updateorder);
route.delete("/delete/:id", orderController.deleteorder);

module.exports = route;
