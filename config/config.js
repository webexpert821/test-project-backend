const ENV = require('dotenv').config();

module.exports = {
  "development": {
    "username": "postgres",
    "password": "123456",
    "database": "users",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
