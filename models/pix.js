const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Client = require('./clients');  

class Pix extends Model {}

Pix.init({
  value: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Client,  // Relacionando com o modelo Client
      key: 'id',
    },
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'Pix'
});

module.exports = Pix;