const blogsModel = require("../models/blogs");
const favoritesModel = require("../models/favorites");
const { getUserFromToken } = require("../util/getUserFromToken");

module.exports.DeleteFavorite = async (req, res, next) => {
  const token = req.header("token");
  const title = req.body.title;
  console.log(title);
  const user = await getUserFromToken(token);
  const getFavorite = await favoritesModel.findOne({ title: title });
  if (getFavorite == null) {
    res.status(409).json({ message: "favorite could not be found" });
  } else {
    if (user.username == getFavorite.user) {
      await favoritesModel.findOneAndDelete({ title: title });
      res.status(201).json({ message: "favorite blog deleted successfully" });
    } else {
      res.status(404).json({
        message: "you do not have the privileges to update this blog",
      });
    }
  }
};
