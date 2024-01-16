import dotenv from "dotenv";

import { emailConfig, transporter } from "../utils/emailTransporter.js";
import STATUS_CODE from "../constants/statusCodes.js";
dotenv.config();

export const sendEmail = (req, res, next) => {
  try {
    const { to, subject, message } = req.body;
    const emailOptions = emailConfig(to, subject, message);

    if (!(to && subject && message)) {
      res.status(STATUS_CODE.BAD_REQUEST).send("Please fill all the fields");
    }
    transporter.sendMail(emailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).send(error.toString());
      } else {
        console.log("Email sent: " + info.response);
        res.status(STATUS_CODE.OK).json({ message: "Email sent successfully" });
      }
    });
  } catch (error) {
    next(error);
  }
};
