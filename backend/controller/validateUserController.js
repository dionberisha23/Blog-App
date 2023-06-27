const userModel = require("../models/users");
const jwt = require("jsonwebtoken");

module.exports.ValidateUser = async (req, res) => {
  const token = req.header("token");
  console.log(token);
  if (token == null) {
    res.status(404).json({ message: "token does not exist" });
  } else {
    jwt.verify(token, process.env.SECRET, async (err, data) => {
      if (err) {
        res.status(406).json({ message: "token is not valid" });
      } else {
        const getUser = await userModel.findById(data.id);
        if (getUser == null) {
          res.status(405).json({ message: "token is not valid" });
        } else {
          res
            .status(201)
            .json({ message: "user validated", username: getUser.username });
        }
      }
    });
  }
};
