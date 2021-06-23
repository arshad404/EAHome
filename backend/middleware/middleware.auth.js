const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.middleAuth = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).send("You need to login, auth.js");
  }
  const decodePayload = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
  req.user = decodePayload;
  next();
};
