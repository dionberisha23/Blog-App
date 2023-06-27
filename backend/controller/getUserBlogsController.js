const blogsModel = require("../models/blogs");
const { getUserFromToken } = require("../util/getUserFromToken");
module.exports.getUserBlogs = async (req, res, next) => {
  const token = req.header("token");
  const user = await getUserFromToken(token);

  const blogs = await blogsModel.find({ user: user.username });
  console.log(blogs);
  if (blogs == null) {
    res.status(409).json({ message: "no blogs available" });
  } else {
    res.status(201).json({ message: "blogs showed successfully", blogs });
  }
};
