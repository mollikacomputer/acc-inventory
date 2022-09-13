const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
// const DBConnect = require("./utils/dbConnect");

const app = require("./app");

// database connection
// DBConnect();

// DATABASE CONNECTION DETAILS
mongoose.connect(process.env.DATABASE_LOCAL).then(()=>{
  console.log(`Database connection is successful`);
})

// server
const port = process.env.PORT || 8080;
// user id acc-inventory
// password 5uoVU4pbl9B76VWK

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});