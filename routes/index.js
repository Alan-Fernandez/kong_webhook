const express = require('express');
const passport = require('passport');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const orderRouter = require('./orders.router');
const customersRouter = require('./customers.router');
const authRouter = require('./auth.router');
const profileRouter = require('./profile.router');
const countriesRouter = require('./countries.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products',  productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/orders', passport.authenticate('jwt', {session: false}), orderRouter);
  router.use('/customers', customersRouter);
  router.use('/countries', countriesRouter);
  router.use('/auth', authRouter);
  router.use('/profile', passport.authenticate('jwt', {session: false}), profileRouter);
}

module.exports = routerApi;
