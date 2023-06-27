const favoritesModel = require("../models/favorites");
const { getUserFromToken } = require("../util/getUserFromToken");

module.exports.GetFavorite = async (req, res, next) => {
  const token = req.header("token");
  const user = await getUserFromToken(token);

  const favorites = await favoritesModel.find({ user: user.username });
  console.log(favorites);
  if (favorites == null) {
    res.status(409).json({ message: "no favorites available" });
  } else {
    res
      .status(201)
      .json({ message: "favoritrs showed successfully", favorites });
  }
};
