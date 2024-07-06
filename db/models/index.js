// db/models/index.js
const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Category, CategorySchema } = require('./category.model');
const { Product, ProductSchema } = require('./product.model');
const { Order, OrderSchema } = require('./order.model');
const { UserAddress, UserAddressSchema } = require('./user_addresses.model');
const { OrderProduct, OrderProductSchema } = require('./order-product.model');
const { Country, CountrySchema } = require('./countries.model');
const { OrderAddress, OrderAddressSchema } = require('./order_address.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  UserAddress.init(UserAddressSchema, UserAddress.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));
  Country.init(CountrySchema, Country.config(sequelize));
  OrderAddress.init(OrderAddressSchema, OrderAddress.config(sequelize));

  User.associate(sequelize.models);
  UserAddress.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
  Country.associate(sequelize.models);
  OrderAddress.associate(sequelize.models);
}

module.exports = setupModels;
