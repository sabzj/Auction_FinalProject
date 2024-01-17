import { Router } from "express";
import upload from "../middleware/multer.js";
import { uploadImage } from "../controllers/cloudinaryRoute.js";
const router = Router();

router.post("/upload", upload.single("image"), uploadImage);

export default router;
