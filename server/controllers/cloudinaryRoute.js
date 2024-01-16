import express from "express";
import { Router } from "express";
import STATUS_CODE from "../constants/statusCodes.js";
const app = express();
const router = Router();
// const upload = require("../middleware/multer.js");
import upload from "../middleware/multer.js";
// const cloudinary = require("../utils/cloudinary.js");
import cloudinary from "../utils/cloudinary.js";
router.post("/upload", upload.single("image"), function (req, res) {
  cloudinary.uploader.upload(req.file.path, function (err, res) {
    if (err) {
      console.log(err);
      return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).send({
        success: false,
        message: err,
      });
    } else {
      res.status(STATUS_CODE.OK).send({
        success: true,
        message: "Image uploaded successfully",
        data: res,
      });
    }
  });
});

// module.exports = router;
export default router;
