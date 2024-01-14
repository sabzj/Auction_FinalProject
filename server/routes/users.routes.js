import { Router } from "express";
import {
  createUser,
  loginUser,
  userProfile,
} from "../controllers/usersController.js";
import authCheckMiddleware from "../middleware/authToken.js";

const router = Router();

router.post("/register", createUser);
router.post("/login", loginUser);

// Use the authMiddleware for the "/profile" route to ensure authentication
router.get("/profile", authCheckMiddleware, userProfile);

export default router;
