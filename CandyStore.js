const { Sequelize, DataTypes } = require('sequelize');

// initialize Sequelize with database credentials
const sequelize = require('./database')
const Candy = sequelize.define('Candy', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'Candy', // Set the table name to 'candy'
  freezeTableName: true, // Prevent Sequelize from automatically pluralization
});

module.exports = Candy;