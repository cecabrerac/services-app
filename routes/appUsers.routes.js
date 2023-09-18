const express = require("express");
const router = express.Router();

// const { Router } = require("express");
// const router = Router();

const {
  addNewUser,
  deleteUserById,
  getAllAppUsers,
  getCountOfUsers,
  getUserById,
  updateUserById,
} = require("../controllers/appUsers.controllers");

router.get("/appUsers", getAllAppUsers);
router.post("/appUsers", addNewUser);
router.get("/appUsers/:id", getUserById);
router.delete("/appUsers/:id", deleteUserById);
router.put("/appUsers/:id", updateUserById);
// router.get("/appUsers/count", getCountOfUsers);

module.exports = router;
