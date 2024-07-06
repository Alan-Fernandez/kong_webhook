// order_address.model.js

const { Model, DataTypes } = require('sequelize');

const ORDER_ADDRESS_TABLE = 'order_addresses';

const OrderAddressSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  address2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  postalCode: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  city: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  countryId: {
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      model: 'countries',
      key: 'id',
    },
  },
  orderId: {
    allowNull: false,
    type: DataTypes.UUID,
    unique: true,
    references: {
      model: 'orders',
      key: 'id',
    },
  },
};

class OrderAddress extends Model {
  static associate(models) {
    this.belongsTo(models.Country, { as: 'country', foreignKey: 'countryId' });
    this.belongsTo(models.Order, { as: 'order', foreignKey: 'orderId' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_ADDRESS_TABLE,
      modelName: 'OrderAddress',
      timestamps: false,
    };
  }
}

module.exports = { OrderAddress, OrderAddressSchema, ORDER_ADDRESS_TABLE };
