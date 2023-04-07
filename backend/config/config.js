const fs = require('fs');

module.exports = {
  development: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_URL,
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: 'postgres',
  },
}