const ENV = require('dotenv').config();

console.log(process.env);

module.exports = {
  "development": {
    "username": process.env.user,
    "password": process.env.password,
    "database": process.env.database,
    "host": process.env.host,
    "dialect": process.env.dialect
  }
}
