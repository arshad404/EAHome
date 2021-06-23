const express = require("express");
const router = express();
const controller = require("../controllers");

router.post("/signup", controller.auth.signup);
router.post("/login", controller.auth.login);

module.exports = router;
