// migrations/20210830181610-create-country.js
'use strict';

const { COUNTRY_TABLE } = require('../models/countries.model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(COUNTRY_TABLE, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(COUNTRY_TABLE);
  }
};
