const { Sequelize } = require("sequelize");

require("dotenv").config();

let dbName = process.env.DBNAME;
let password = process.env.PASSWORD;

module.exports = new Sequelize(dbName, "test", password, {
  host: "localhost",
  dialect: "postgres",
});
