const { Sequelize } = require('sequelize');

const authDB = new Sequelize('fatal_query', 'root', 'nandini@2005', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    define: {
        timestamps: false
    }
});

module.exports = authDB;
