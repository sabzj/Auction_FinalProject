import { Router } from "express";
import upload from "../middleware/multer.js";
import { uploadImage } from "../controllers/cloudinaryController.js";
const router = Router();

router.post("/upload", upload.single("image"), uploadImage);

export default router;
