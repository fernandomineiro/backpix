const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Client extends Model {}

Client.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
}, {
  sequelize,
  modelName: 'Client'
});

module.exports = Client;