const userModel = require("../models/users");
const { getUserFromToken } = require("../util/getUserFromToken");
const bcrypt = require("bcryptjs");

module.exports.UpdateUser = async (req, res, next) => {
  const token = req.header("token");
  const user = await getUserFromToken(token);
  const oldpassword = req.body.oldpassword;
  const newpassword = req.body.newpassword;

  const getUser = await userModel.findOne({ username: user.username });
  if (getUser == null) {
    res.status(404).json({ message: "token is not valid" });
  } else {
    const validatePassword = await bcrypt.compare(
      oldpassword,
      getUser.password
    );
    if (!validatePassword) {
      res.status(409).json({ message: "old password is incorrect" });
    } else {
      const hashedPassword = await bcrypt.hash(newpassword, 10);
      await userModel.findOneAndUpdate(
        { username: user.username },
        { password: hashedPassword }
      );
      res.status(201).json({ message: "user password updated sucessfully" });
    }
  }
};
