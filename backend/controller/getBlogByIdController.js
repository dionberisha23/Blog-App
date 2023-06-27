const blogsModel = require("../models/blogs");

module.exports.getBlogById = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  const blog = await blogsModel.findOne({ _id: id });
  console.log(blog);
  if (blog == null) {
    res.status(409).json({ message: "no blogs available" });
  } else {
    res.status(201).json({ message: "blogs showed successfully", blog });
  }
};
