const express = require("express");
const router = express.Router();

const {
  getAllComments,
  addNewComment,
  getComment,
} = require("../controllers/comments.controlers");

router.get("/comments", getAllComments);
router.post("/comments", addNewComment);
router.get("/comments/:id", getComment);

module.exports = router;
