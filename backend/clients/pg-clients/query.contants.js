require("dotenv").config();
const db = require("../../models");
const { getUserDataByEmail } = require("./user");
// const users = db.users;

const getUserDetailById = (email) => {
  console.log("*************************");
  const query = `SELECT * from users WHERE email = '${email}' LIMIT 1`;
  return query;
};

module.exports = {
  getUserDetailById,
};
