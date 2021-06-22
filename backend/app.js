const express = require("express");
var cors = require("cors");

const app = express();
const controller = require("./controllers");
const authRoute = require("./routers/route.auth");

app.use(cors());
app.use(express.json());

app.get("/api/v1", (req, res) => {
  // let error = new Error("wrong route");
  // error.status = 401;
  // throw error;
  res.send("You are at index");
});

app.get("/get", controller.userC.addUser);
app.use("/api/v1/auth", authRoute);

app.use(controller.errorHandler.defaultErrorHandler);
app.use(controller.errorHandler.errorHandler);

module.exports = app;
