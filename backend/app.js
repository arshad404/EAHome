const express = require("express");
var cors = require("cors");

const app = express();
const controller = require("./controllers");

app.use(cors());

app.get("/", (req, res) => {
  // let error = new Error("wrong route");
  // error.status = 401;
  // throw error;
  res.send("You are at index");
});

app.get("/get", controller.userC.addUser);

app.use(controller.errorHandler.defaultErrorHandler);
app.use(controller.errorHandler.errorHandler);

module.exports = app;
