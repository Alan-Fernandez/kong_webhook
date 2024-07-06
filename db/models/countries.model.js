// db/models/countries.model.js
const { Model, DataTypes } = require('sequelize');

const COUNTRY_TABLE = 'countries';

const CountrySchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class Country extends Model {
  static associate(models) {
    this.hasMany(models.UserAddress, { as: 'userAddresses', foreignKey: 'countryId' });
    this.hasMany(models.OrderAddress, { as: 'orderAddresses', foreignKey: 'countryId' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: COUNTRY_TABLE,
      modelName: 'Country',
      timestamps: false,
    };
  }
}

module.exports = { Country, CountrySchema, COUNTRY_TABLE };
