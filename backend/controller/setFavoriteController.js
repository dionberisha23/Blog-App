const blogsModel = require("../models/blogs");
const favoritesModel = require("../models/favorites");
const { getUserFromToken } = require("../util/getUserFromToken");

module.exports.SetFavorite = async (req, res, next) => {
  const token = req.header("token");
  const title = req.body.title;
  console.log(title);
  const user = await getUserFromToken(token);
  if (user.username == null) {
    res.status(404).json({ message: "token is not valid" });
  } else {
    const getBlog = await blogsModel.findOne({ title: title });
    if (getBlog == null) {
      res.status(409).json({ message: "blog does not exist" });
    } else {
      const getFavorite = await favoritesModel.findOne({ _id: getBlog._id });
      if (getFavorite !== null) {
        res.status(409).json({ message: "blog already a favorite" });
      } else {
        const Favorite = new favoritesModel({
          _id: getBlog._id,
          title: title,
          poster: getBlog.user,
          user: user.username,
        });
        await Favorite.save();
        res.status(201).json({ message: "blog added to favorites" });
      }
    }
  }
};
