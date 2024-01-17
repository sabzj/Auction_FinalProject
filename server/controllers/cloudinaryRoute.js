import STATUS_CODE from "../constants/statusCodes.js";

// const upload = require("../middleware/multer.js");
// const cloudinary = require("../utils/cloudinary.js");
import cloudinary from "../utils/cloudinary.js";
// import { handleUpload } from "../utils/cloudinary.js";

export const uploadImage = async (req, res, next) => {
  try {
    // cloudinary.uploader.upload(
    //   dataURI,
    //   { resource_type: "image" },
    //   function (err, res) {
    //     if (err) {
    //       console.log(`i am here`);
    //       console.log("err", err);
    //       res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).send({
    //         success: false,
    //         message: err,
    //       });
    //     } else {
    //       res.status(STATUS_CODE.OK).send({
    //         success: true,
    //         message: "Image uploaded successfully",
    //         data: res,
    //       });
    //     }
    //   }
    // );

    const { file } = req;
    if (!file) {
      res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .send({ success: false, message: "no such file" });
    }

    const { secure_url, public_id } = await cloudinary.uploader.upload(
      file.path,
      {
        resource_type: "image",
      }
    );
    res.status(STATUS_CODE.OK).send({ url: secure_url, public_id });
  } catch (error) {
    next(error);
  }
};
// module.exports = router;
