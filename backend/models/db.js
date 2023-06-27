const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.URL;
async function connect() {
  try {
    await mongoose.connect(url, {
      dbName: "bloggapp",
    });
    console.log("connected successfully");
  } catch (err) {
    console.log(err);
  }
}
module.exports = connect;
