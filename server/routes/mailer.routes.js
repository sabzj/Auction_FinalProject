import { Router } from "express";
import { sendEmail } from "../controllers/mailSender.js";

const router = Router();

router.post("/send-email", sendEmail);

export default router;
