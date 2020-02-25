const Sequelize = require('sequelize');

module.exports = new Sequelize('contacts', 'postgres', 'postgres', {
  host: 'http://127.0.0.1',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

// module.exports = new Sequelize('postgres://postgres:postgres@127.0.0.1:62675/contacts');

//Test DB
