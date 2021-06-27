const bcrypt = require("bcrypt");
require("dotenv").config();
const db = require("../models");
const Users = db.users;
const { getUserDataByEmail } = require("../clients/pg-clients/user");

module.exports.signup = async (req, res, next) => {
  try {
    const { name, email, password, trainer } = req.body;
    const user = await Users.findOne({ where: { email: email } });
    if (user) {
      throw new error("Email already exist");
    }
    await Users.create({
      name: name,
      email: email,
      password: password,
      trainer: trainer,
    });
    res.status(200).json({ Status: "User added successfully" });
  } catch (err) {
    let error = new Error(`Problem in signup: ${err.message}`);
    error.status = 403;
    throw error;
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email: email } });
    // const user = await getUserDataByEmail(email);
    // user = user[0][0];
    // console.log(user, "*******************", user[0][0].name);
    if (user) {
      let matchPass = await bcrypt.compare(password, user.password);
      if (matchPass) {
        let token = user.generateToken();
        return res
          .status(200)
          .header("x-auth-token", token)
          .json({ Token: token });
      } else {
        return res.status(400).json({ message: "Wrong Credentials" });
      }
    } else {
      return res.status(400).json({ message: "Wrong email/pass" });
    }
  } catch (err) {
    let error = new Error(`Problem in login ${err.message}`);
    error.status = 403;
    throw error;
  }
};
