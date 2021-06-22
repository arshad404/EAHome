require("dotenv").config();
const bcrypt = require("bcryptjs");
const db = require("../models");
const Users = db.users;

const signup = async (req, res, next) => {
  try {
    const { name, email, password, trainer } = req.body;
    const user = await Users.findOne({ where: { email: email } });
    if (user) {
    }
  } catch (err) {
    console.log(err);
  }
};
