const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("You are at index");
});

module.exports = app;
