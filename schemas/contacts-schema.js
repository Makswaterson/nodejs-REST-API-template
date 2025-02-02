const Joi = require('joi');

const contactsSchema = Joi.object({
  name: Joi.string().required().messages({ 'any.required': 'missing required name field' }),
  email: Joi.string()
    .email()
    .required()
    .messages({ 'any.required': 'missing required email field' }),
  phone: Joi.string().required().messages({ 'any.required': 'missing required phone field' }),
});

const favoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = { contactsSchema, favoriteSchema };
