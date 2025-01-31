//Javier
//consultas bdd
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', 
});

module.exports = sequelize;
