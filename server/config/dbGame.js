const { Sequelize } = require('sequelize');

const gameDB = new Sequelize('hidden_symphony_db', 'root', 'nandini@2005', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  define: {
    timestamps: false
  }
});
module.exports = gameDB;