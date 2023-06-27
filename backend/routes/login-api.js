const express = require("express");
const router = express.Router();
const { Login } = require("../controller/loginController");
const { UpdateUser } = require("../controller/updateUserController");
router.post("/login", Login);

/**
 * @swagger
 *   /login:
 *     post:
 *       summary: login with credentials
 *       description: complete the form about login and enter the website as a user
 *       parameters:
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
 *           description: User loged in successfully
 *         409:
 *           description: All fields are required
 *         408:
 *           description: User isnt registered
 *         404:
 *           description: password is incorrect
 *
 */

router.put("/update-credentials", UpdateUser);

/**
 * @swagger
 *   /update-credentials:
 *     put:
 *       summary: update ur password
 *       description: enter old password and change it to a new one
 *       parameters:
 *         - name: oldpassword
 *           in: formData
 *           required: true
 *           schema:
 *             type: String
 *         - name: newpassword
 *           in: formData
 *           required: true
 *           schema:
 *             type: Password
 *
 *
 *       responses:
 *         201:
 *           description: User updated successfully
 *         409:
 *           description: old password is incorrect
 *         404:
 *           description: token is not valid
 *
 */

module.exports = router;
