const userModel = require("../models/users");
const { generateToken } = require("../util/generateToken");
const bcrypt = require("bcryptjs");

module.exports.Register = async (req, res, next) => {
  try {
    const user = await req.body;
    const email = user.email;
    hashedPassword = await bcrypt.hash(user.password, 10);
    const checkUser = await userModel.findOne({ email: email });
    if (checkUser != null) {
      res.status(409).json({ message: "user already exists" });
    }
    const newUser = new userModel({
      username: user.username,
      email: user.email,
      password: hashedPassword,
    });

    await newUser.save();
    const token = generateToken(newUser._id);
    res.status(202).cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res
      .status(201)
      .json({ message: "user created successfully", token: token });
    next();
  } catch (error) {
    console.log(error);
  }
};
