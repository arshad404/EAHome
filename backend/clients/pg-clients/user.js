const queryConstants = require("./query.contants");
require("dotenv").config();
const db = require("../../models");
const Users = db.users;

const getUserDataByEmail = async (email) => {
  try {
    const query = queryConstants.getUserDetailById(email);
    return await db.sequelize.query(query);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getUserDataByEmail,
};
