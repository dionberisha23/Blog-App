const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "name must not be empty"],
  },
  poster: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});

const favoritesModel = mongoose.model("favorites", schema);

module.exports = favoritesModel;
