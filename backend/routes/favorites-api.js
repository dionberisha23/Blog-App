const express = require("express");
const router = express.Router();
const { SetFavorite } = require("../controller/setFavoriteController");
const { GetFavorite } = require("../controller/getFavoritesController");
const { DeleteFavorite } = require("../controller/deleteFavoriteController");

router.post("/set-favorites", SetFavorite);
/**
 * @swagger
 *   /set-favorites:
 *     post:
 *       summary: set a blog as favorite
 *       description: set a blog as favorite
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
 *           description: blog set as favorite successfully
 *         409:
 *           description: blog does not exist
 *         404:
 *           description: token is not valid
 *
 */

router.get("/get-favorites", GetFavorite);
/**
 * @swagger
 *   /get-favorites:
 *     get:
 *       summary: get all favorite blogs of user
 *       description: get favorites
 *
 *
 *       responses:
 *         201:
 *           description: showed all favorites
 *         409:
 *           description: blog does not exist
 *         404:
 *           description: token is not valid
 *
 */

router.post("/delete-favorite", DeleteFavorite);

/**
 * @swagger
 *   /delete-favorite:
 *     post:
 *       summary: delete a favorite blog
 *       description: delete a favorite blog with the username generated from the token
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
 *           description: favorite blog deleted successfully
 *         409:
 *           description: All fields are required
 *         404:
 *           description: token is not valid
 *
 */

module.exports = router;
