const express = require("express");
const router = express();
const controller = require("../controllers");

router.post("/signup", controller.auth.signup);

module.exports = router;
