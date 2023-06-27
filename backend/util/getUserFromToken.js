const userModel = require("../models/users");
const jwt = require("jsonwebtoken");

module.exports.getUserFromToken = async (token) => {
  const data = jwt.verify(token, process.env.SECRET);
  const getUser = await userModel.findById(data.id);
  return getUser;
};
