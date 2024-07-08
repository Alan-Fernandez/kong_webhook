const express = require('express');
const passport = require('passport');
const CountryService = require('../services/country.service');
const validatorHandler = require('../middlewares/validator.handler');
const { checkRoles } = require('../middlewares/auth.handler');
const { createUserAddressSchema, updateUserAddressSchema, getUserAddressSchema } = require('../schemas/country.shema');

const router = express.Router();
const service = new CountryService();

router.get('/',
  // passport.authenticate('jwt', { session: false }), // Uncomment if authentication is required
  // checkRoles('admin', 'seller', 'customer'), // Uncomment if role-based access control is required
  async (req, res, next) => {
    try {
      const countries = await service.find();
      res.json(countries);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:id',
  // passport.authenticate('jwt', { session: false }), // Uncomment if authentication is required
  // checkRoles('admin', 'seller', 'customer'), // Uncomment if role-based access control is required
  validatorHandler(getUserAddressSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const country = await service.findOne(id);
      res.json(country);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  validatorHandler(createUserAddressSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCountry = await service.create(body);
      res.status(201).json(newCountry);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'seller'),
  validatorHandler(getUserAddressSchema, 'params'),
  validatorHandler(updateUserAddressSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const country = await service.update(id, body);
      res.json(country);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'seller'),
  validatorHandler(getUserAddressSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
