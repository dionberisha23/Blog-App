const express = require("express");
const router = express.Router();
const { Blogs } = require("../controller/blogsController");
const { getBlogs } = require("../controller/getBlogsController");
const { UpdateBlog } = require("../controller/updateBlogController");
const { DeleteBlog } = require("../controller/deleteBlogsController");
const { getUserBlogs } = require("../controller/getUserBlogsController");
const { getBlogById } = require("../controller/getBlogByIdController");

router.post("/blogs", Blogs);

/**
 * @swagger
 *   /blogs:
 *     post:
 *       summary: post a blog
 *       description: post a blog with the username generated from the token
 *       parameters:
 *         - name: title
 *           in: formData
 *           required: true
 *           schema:
 *             type: String
 *         - name: content
 *           in: formData
 *           required: true
 *           schema:
 *             type: Password
 *
 *
 *       responses:
 *         201:
 *           description: blog posted successfully
 *         409:
 *           description: All fields are required
 *         404:
 *           description: token is not valid
 *
 */

router.get("/blogs", getBlogs);

/**
 * @swagger
 *   /blogs:
 *     get:
 *       summary: get all blogs
 *       description: get all blogs from database
 *
 *
 *
 *       responses:
 *         201:
 *           description: blogs displayed successfully
 *         409:
 *           description: no blogs available
 *
 */

router.put("/update-blog", UpdateBlog);

/**
 * @swagger
 *   /update-blog:
 *     put:
 *       summary: update a blog
 *       description: update a blog with the username generated from the token
 *       parameters:
 *         - name: title
 *           in: formData
 *           required: true
 *           schema:
 *             type: String
 *         - name: content
 *           in: formData
 *           required: true
 *           schema:
 *             type: Password
 *
 *
 *       responses:
 *         201:
 *           description: blog posted successfully
 *         409:
 *           description: All fields are required
 *         404:
 *           description: token is not valid
 *
 */

router.post("/delete-blog", DeleteBlog);

/**
 * @swagger
 *   /delete-blog:
 *     post:
 *       summary: delete a blog
 *       description: delete a blog with the username generated from the token
 *       parameters:
 *         - name: title
 *           in: formData
 *           required: true
 *           schema:
 *             type: String
 *
 *
 *       responses:
 *         201:
 *           description: blog deleted successfully
 *         409:
 *           description: All fields are required
 *         404:
 *           description: token is not valid
 *
 */

router.get("/user-blogs", getUserBlogs);

/**
 * @swagger
 *   /user-blogs:
 *     get:
 *       summary: get all blogs
 *       description: get all blogs from database
 *
 *
 *
 *       responses:
 *         201:
 *           description: blogs displayed successfully
 *         409:
 *           description: no blogs available
 *
 */

router.get("/blog/:id", getBlogById);
/**
 * @swagger
 *   /blog/{id}:
 *     get:
 *       summary: get blog by url parameter
 *       description: get the id from the url and display the blog by that id
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: String
 *
 *
 *       responses:
 *         201:
 *           description: blogs displayed successfully
 *         409:
 *           description: no blogs available
 *
 */
module.exports = router;
