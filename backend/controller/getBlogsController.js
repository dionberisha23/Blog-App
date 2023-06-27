const blogsModel = require("../models/blogs");

module.exports.getBlogs = async (req, res, next) => {
  const blogs = await blogsModel.find();
  console.log(blogs);
  if (blogs == null) {
    res.status(409).json({ message: "no blogs available" });
  } else {
    res.status(201).json({ message: "blogs showed successfully", blogs });
  }
};
