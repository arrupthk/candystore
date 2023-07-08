const Sequelize = require('sequelize');

const sequelize = new Sequelize('candy-store', 'root', 'Chaddi@1009', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

module.exports = sequelize

