const Joi = require('joi');

const contactsSchema = Joi.object({
  name: Joi.string().required().messages({ 'any.required': 'missing required name field' }),
  email: Joi.string()
    .email()
    .required()
    .messages({ 'any.required': 'missing required email field' }),
  phone: Joi.string()
    .pattern(/^\(\d{3}\) \d{3}-\d{4}$/)
    .max(18)
    .required()
    .messages({ 'any.required': 'missing required phone field' }),
});
module.exports = { contactsSchema };
