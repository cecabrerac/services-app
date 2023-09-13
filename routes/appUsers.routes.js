const { Router } = require("express");
const {
  addNewUser,
  deleteUserById,
  getAllAppUsers,
  getCountOfUsers,
  getUserById,
  updateUserById,
} = require("../controllers/appUsers.controllers");
const {
  getAllCards,
  addNewCard,
  getCard,
} = require("../controllers/cards.controllers");

const router = Router();

router.get("/appUsers", getAllAppUsers);
router.post("/appUsers", addNewUser);
router.get("/appUsers/:id", getUserById);
router.delete("/appUsers/:id", deleteUserById);
router.put("/appUsers/:id", updateUserById);
// router.get("/appUsers/count", getCountOfUsers);

router.get("/cards", getAllCards);
router.post("/cards", addNewCard);
router.get("/cards/:id", getCard);

module.exports = router;
