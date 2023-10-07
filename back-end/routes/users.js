const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// Routes related to users
router.get("/", usersController.getAllUsers);
router.get("/:userId", usersController.getUserById);
router.post("/", usersController.addUser);

module.exports = router;
