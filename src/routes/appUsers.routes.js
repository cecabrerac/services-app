import { Router } from "express";
import {
  addNewUser,
  deleteUserById,
  getAllAppUsers,
  getCountOfUsers,
  getUserById,
  updateUserById,
  getPosts,
} from "../controllers/appUsers.controllers";

import {
  getLangSpanish,
  getLangEnglish,
} from "../controllers/appLangsControlers";

const router = Router();

router.get("/appUsers", getAllAppUsers);
router.post("/appUsers", addNewUser);
router.get("/appUsers/:id", getUserById);
router.delete("/appUsers/:id", deleteUserById);
router.put("/appUsers/:id", updateUserById);
// router.get("/appUsers/count", getCountOfUsers);

router.get("/es", getLangSpanish);
router.get("/en", getLangEnglish);

export default router;
