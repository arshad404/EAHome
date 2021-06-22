const express = require("express");
const router = express();

router.get("/signup", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = router;
