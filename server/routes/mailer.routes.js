import { Router } from "express";
import dotenv from "dotenv";
import { sendEmail } from "../controllers/mailSender.js";

dotenv.config();
const router = Router();

router.post("/send-email", sendEmail);

export default router;
