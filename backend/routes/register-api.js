const express = require("express");
const router = express.Router();
const { Register } = require("../controller/registerController");
router.post("/register", Register);

/**
 * @swagger
 *   /register:
 *     post:
 *       summary: register with credentials
 *       description: complete the form about register and enter the website as a user
 *       parameters:
 *         - name: username
 *           in: formData
 *           required: true
 *           schema:
 *             type: String
 *         - name: email
 *           in: formData
 *           required: true
 *           schema:
 *             type: String
 *         - name: password
 *           in: formData
 *           required: true
 *           schema:
 *             type: Password
 *
 *
 *       responses:
 *         201:
 *           description: User registered successfully
 *         209:
 *           description: User already exists
 *
 */

module.exports = router;
