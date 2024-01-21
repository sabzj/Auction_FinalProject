import STATUS_CODE from "../constants/statusCodes.js";

import cloudinary from "../utils/cloudinary.js";

export const uploadImage = async (file) => {
  try {
    if (!file) {
      res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .send({ success: false, message: "no such file" });
    }

    const { secure_url, public_id } = await cloudinary.uploader.upload(file, {
      resource_type: "image",
    });

    return { url: secure_url, public_id };
  } catch (error) {
    console.log(error);
  }
};
