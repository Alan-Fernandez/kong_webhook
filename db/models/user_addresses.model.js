// db/models/user_addresses.model.js
const { Model, DataTypes } = require('sequelize');

const USER_ADDRESS_TABLE = 'user_addresses';

const UserAddressSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  postalCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  countryId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'countries',
      key: 'id'
    },
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    unique: true,
    references: {
      model: 'users',
      key: 'id'
    },
  },
}

class UserAddress extends Model {
  static associate(models) {
    this.belongsTo(models.Country, { as: 'country', foreignKey: 'countryId' });
    this.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_ADDRESS_TABLE,
      modelName: 'UserAddress',
      timestamps: false,
    }
  }
}

module.exports = { UserAddress, UserAddressSchema, USER_ADDRESS_TABLE };
