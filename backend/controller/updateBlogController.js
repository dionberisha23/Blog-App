const blogsModel = require("../models/blogs");
const { getUserFromToken } = require("../util/getUserFromToken");

module.exports.UpdateBlog = async (req, res, next) => {
  const token = req.header("token");
  const title = req.body.title;
  const content = req.body.content;
  const user = await getUserFromToken(token);
  const getBlog = await blogsModel.findOne({ title: title });
  if (getBlog == null) {
    res.status(409).json({ message: "blog could not be found" });
  } else {
    if (user.username == getBlog.user) {
      await blogsModel.findOneAndUpdate({ title: title }, { content: content });
      res.status(201).json({ message: "blog updated successfully" });
    } else {
      res.status(404).json({
        message: "you do not have the privileges to update this blog",
      });
    }
  }
};
