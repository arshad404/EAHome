require("dotenv").config();
const db = require("../models");
const Users = db.users;

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
    console.log("User created successfully");
  } catch (err) {
    console.log(err);
  }
};
