const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET);
};
