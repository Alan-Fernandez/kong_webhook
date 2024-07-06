// migrations/20210830181617-create-order-address.js
'use strict';

const { ORDER_ADDRESS_TABLE } = require('../models/order_address.model');
const { COUNTRY_TABLE } = require('../models/countries.model');
const { ORDER_TABLE } = require('../models/order.model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(ORDER_ADDRESS_TABLE, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      address2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      postalCode: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      countryId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: COUNTRY_TABLE,
          key: 'id',
        },
      },
      orderId: {
        allowNull: false,
        type: Sequelize.UUID,
        unique: true,
        references: {
          model: ORDER_TABLE,
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ORDER_ADDRESS_TABLE);
  }
};
