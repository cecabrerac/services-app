const { Router } = require("express");
const {
  addNewUser,
  deleteUserById,
  getAllAppUsers,
  getCountOfUsers,
  getUserById,
  updateUserById,
  getCards,
} = require("../controllers/appUsers.controllers");

const router = Router();

router.get("/appUsers", getAllAppUsers);
router.post("/appUsers", addNewUser);
router.get("/appUsers/:id", getUserById);
router.delete("/appUsers/:id", deleteUserById);
router.put("/appUsers/:id", updateUserById);
// router.get("/appUsers/count", getCountOfUsers);
router.get("/cards", getCards);

module.exports = router;
