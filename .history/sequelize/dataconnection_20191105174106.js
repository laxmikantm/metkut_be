const Sequelize = require('sequelize');

module.exports = new Sequelize('contacts', 'postgres', 'tiger', {
  host: '127.0.0.1:5432',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

//Test DB
