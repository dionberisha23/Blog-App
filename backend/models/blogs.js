const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "name must not be empty"],
  },
  content: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const blogsModel = mongoose.model("blogs", schema);

module.exports = blogsModel;
