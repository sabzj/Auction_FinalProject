import { Router } from "express";
import {
  createAuction,
  deleteAuction,
  getAllAuctions,
  getAuctionById,
  updateAuction,
} from "../controllers/auctionController.js";

const router = Router();

router.get("/", getAllAuctions);
router.get("/ :id", getAuctionById);

router.post("/", createAuction);
router.put("/ :id", updateAuction);
router.delete("/ :id", deleteAuction);

export default router;
