const Joi = require("joi");

const addOrder = {
  body: Joi.object().keys({
    totalBill: Joi.number().required(),
    restaurant: Joi.string().required().trim(),
    item: Joi.string().required().trim(),
    customer:Joi.string().required(),
    date:Joi.date().required(),
  }),
};
module.exports = {
  addOrder,
};
