const app = require("./app");

require("dotenv").config();
require("./models");

//starting the server
app.listen(process.env.PORT, () => {
  console.log("server started");
});
