import { Router } from "express";

import {
  createAuction,
  deleteAuction,
  getAllAuctions,
  getAuctionById,
  updateAuction,
  getAllLiveAuctions,
} from "../controllers/auctionController.js";
import upload from "../middleware/multer.js";
import authCheckMiddleware from "../middleware/authToken.js";

const router = Router();

router.get("/", getAllAuctions);
router.get("/liveauctions", getAllLiveAuctions);
router.get("/:id", getAuctionById);
router.post("/", upload.single("image"), createAuction);
router.put("/:id", authCheckMiddleware, updateAuction);
router.delete("/:id", deleteAuction);

export default router;
