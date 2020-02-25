const Sequelize = require('sequelize');

module.exports = new Sequelize('contacts', 'postgres', 'postgres', {
  host: 'http://localhost:3000**:5432',
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
// module.exports = new Sequelize('postgres://amaowdshslnivy:532ed45a89fc08871e46a262288632e138a90a774ce9e848bef3883c839f88a4@ec2-46-137-113-157.eu-west-1.compute.amazonaws.com:5432/dacrh6jn7gli0e');

//Test DB
