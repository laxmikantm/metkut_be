const Sequelize = require('sequelize');

// module.exports = new Sequelize('contacts', 'postgres', 'postgres', {
//   host: 'http://localhost:35432',
//   dialect: 'postgres',
//   operatorsAliases: false,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
// });

// module.exports = new Sequelize('contacts', 'amaowdshslnivy', '532ed45a89fc08871e46a262288632e138a90a774ce9e848bef3883c839f88a4', {
//   host: 'ec2-46-137-113-157.eu-west-1.compute.amazonaws.com:5432/dacrh6jn7gli0e',
//   dialect: 'postgres',
//   operatorsAliases: false,
//   sslmode: require,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
// });

// module.exports = new Sequelize('postgres://postgres:postgres@localhost:3000/?key=73c61aaf-e798-46c0-a9cb-a444c7b65a06/contacts');
module.exports = new Sequelize('postgres://postgres:postgres@127.0.0.1:5433/?key=73c61aaf-e798-46c0-a9cb-a444c7b65a06/somnil');
// module.exports = new Sequelize('postgres://postgres:postgres@localhost:5432/contacts');
// module.exports = new Sequelize('postgres://amaowdshslnivy:532ed45a89fc08871e46a262288632e138a90a774ce9e848bef3883c839f88a4@ec2-46-137-113-157.eu-west-1.compute.amazonaws.com:6212/db982398');

//Test DB
