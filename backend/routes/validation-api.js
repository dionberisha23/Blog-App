const express = require("express");
const router = express.Router();
const { ValidateUser } = require("../controller/validateUserController");
router.get("/validate", ValidateUser);

/**
 * @swagger
 *   /validate:
 *     get:
 *       summary: validate user with token
 *       description: get the token from cookies and validate user
 *
 *
 *
 *       responses:
 *         201:
 *           description: User is valid
 *         405:
 *           description: token is invalid
 *         404:
 *           description: token does not exist
 *
 */

module.exports = router;
