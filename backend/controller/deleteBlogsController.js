const blogsModel = require("../models/blogs");
const { getUserFromToken } = require("../util/getUserFromToken");

module.exports.DeleteBlog = async (req, res, next) => {
  const token = req.header("token");
  const title = req.body.title;
  const user = await getUserFromToken(token);
  const getBlog = await blogsModel.findOne({ title: title });
  if (getBlog == null) {
    res.status(409).json({ message: "blog could not be found" });
  } else {
    if (user.username == getBlog.user) {
      await blogsModel.findOneAndDelete({ title: title });
      res.status(201).json({ message: "blog deleted successfully" });
    } else {
      res.status(404).json({
        message: "you do not have the privileges to update this blog",
      });
    }
  }
};
