const userModel = require("../models/users");
const { generateToken } = require("../util/generateToken");
const bcrypt = require("bcryptjs");

module.exports.Login = async (req, res, next) => {
  try {
    const user = req.body;
    if (user.email == null || user.password == null) {
      res.status(209).json({ message: "all fields are required" });
    }
    const checkUser = await userModel.findOne({ email: user.email });
    if (checkUser == null) {
      res.status(408).json({ message: "user isnt registered" });
    }
    const validatePassword = await bcrypt.compare(
      user.password,
      checkUser.password
    );
    if (!validatePassword) {
      res.status(404).json({ message: "password is incorrect" });
    } else {
      const token = generateToken(checkUser._id);
      res.status(202).cookie("token", token, {
        httpOnly: true,
        path: "/",
        sameSite: "strict",
      });
      res.status(201).json({ message: "logged in successfully", token: token });
      next();
    }
  } catch (err) {
    console.log(err);
  }
};
