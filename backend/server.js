const app = require("./app");
const db = require("./config/dbConnect");

require("dotenv").config();

//check db either connected or not
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error in connecting database", err));

//starting the server
app.listen(process.env.PORT, () => {
  console.log("server started");
});
