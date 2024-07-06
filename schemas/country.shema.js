const Joi = require('joi');

const id = Joi.string().guid({ version: ['uuidv4'] });
const firstName = Joi.string().min(1).max(30);
const lastName = Joi.string().min(1).max(30);
const address = Joi.string().min(1).max(100);
const address2 = Joi.string().min(1).max(100).allow(null, '');
const postalCode = Joi.string().min(1).max(20);
const phone = Joi.string().min(1).max(20);
const city = Joi.string().min(1).max(50);
const countryId = Joi.string().guid({ version: ['uuidv4'] });
const userId = Joi.string().guid({ version: ['uuidv4'] }).required();

const createUserAddressSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  address: address.required(),
  address2: address2,
  postalCode: postalCode.required(),
  phone: phone.required(),
  city: city.required(),
  countryId: countryId.required(),
  userId: userId
});

const updateUserAddressSchema = Joi.object({
  firstName: firstName,
  lastName: lastName,
  address: address,
  address2: address2,
  postalCode: postalCode,
  phone: phone,
  city: city,
  countryId: countryId,
  userId: userId
});

const getUserAddressSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserAddressSchema, updateUserAddressSchema, getUserAddressSchema };
