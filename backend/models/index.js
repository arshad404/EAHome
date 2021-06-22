const { Sequelize, DataTypes } = require("sequelize");

require("dotenv").config();

let dbName = process.env.DBNAME;
let password = process.env.PASSWORD;

const sequelize = new Sequelize(dbName, "test", password, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
  poll:{max: 5, min: 0, idle: 10000}
});

//check db either connected or not
sequelize.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error in connecting database", err));


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync().then(() => {
    console.log("Model sync");
}).catch((err) => {
    `Error: ${err}`
})

db.users = require("./user")(sequelize, DataTypes);

module.exports = db;