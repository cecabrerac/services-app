const express = require("express");
const router = express.Router();

const {
  getAllCards,
  addNewCard,
  //   getCard,
} = require("../controllers/cards.controllers");

router.get("/cards", getAllCards);
router.post("/cards", addNewCard);
// router.get("/cards/:id", getCard);

module.exports = router;
