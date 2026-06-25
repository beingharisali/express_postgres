const express = require("express");
const { getUsers, createUser, editUser, deleteUser, getUserById } = require("../controllers/users");
const router = express.Router();
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.patch("/:id", editUser);
router.delete("/:id", deleteUser);

module.exports = router;
