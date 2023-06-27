const blogsModel = require("../models/blogs");
const { getUserFromToken } = require("../util/getUserFromToken");

module.exports.Blogs = async (req, res, next) => {
  const token = req.header("token");
  const blog = req.body;
  const user = await getUserFromToken(token);
  console.log(user);
  if (user.username == null) {
    res.status(404).json({ message: "user does not exist" });
  } else if (blog.title == null || blog.content == null) {
    res.status(409).json({ message: "fields cant be empty" });
  } else {
    const setNewBlog = new blogsModel({
      title: blog.title,
      content: blog.content,
      user: user.username,
    });
    await setNewBlog.save();
    res.status(201).json({ message: "blog added successfully" });
  }
};
