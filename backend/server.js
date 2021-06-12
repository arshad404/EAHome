const app = require("./app");
const db = require("./config/dbConnect");

require("dotenv").config();

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error in connecting database", err));

app.listen(process.env.PORT, () => {
  console.log("server started");
});
