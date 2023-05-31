import { Router } from "express";
import {
  addNewUser,
  deleteUserById,
  getAllAppUsers,
  getCountOfUsers,
  getUserById,
  updateUserById,
} from "../controllers/appUsers.controllers";

const router = Router();

router.get("/appUsers", getAllAppUsers);
router.post("/appUsers", addNewUser);
router.get("/appUsers/:id", getUserById);
router.delete("/appUsers/:id", deleteUserById);
router.put("/appUsers/:id", updateUserById);
// router.get("/appUsers/count", getCountOfUsers);

export default router;
