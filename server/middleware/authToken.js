import jwt from "jsonwebtoken";
import STATUS_CODE from "../constants/statusCodes.js";
import User from "../models/userSchema.js";

const authCheckMiddleware = async (req, res, next) => {
  try {
    // Extract the token from the Authorization header
    const authorizationHeader = req.header("Authorization");
    console.log("auth ", authorizationHeader);
    // console.log(req.headers);

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      res.status(STATUS_CODE.UNAUTHORIZED);
      throw new Error("Authorization failed: Invalid token format");
    }

    const token = req.header("Authorization").split("Bearer ")[1];
    console.log("token -'" + token + "'");
    if (!token) {
      res.status(STATUS_CODE.UNAUTHORIZED);
      throw new Error("Authorization failed: No token provided");
    }

    // Verify the token
    const userSecretKey = process.env.SERVERKEY;
    console.log("userSecretKey ", userSecretKey);
    console.log(token);
    const decoded = jwt.verify(token, userSecretKey);
    console.log("decoded ", decoded);
    // Find the user in the database based on the decoded token

    if (decoded) {
      const user = await User.findOne({
        _id: decoded.id,
        email: decoded.email,
        userType: decoded.userType,
      });
      console.log("user ", user);
      if (!user) {
        res.status(STATUS_CODE.UNAUTHORIZED);
        throw new Error("Authorization failed: User not found");
      }

      // Set the authenticated user information in the request object
      req.user = user;

      // Continue to the next middleware or route handler
      next();
    } else {
      res.status(STATUS_CODE.UNAUTHORIZED);
      throw new Error("Authorization failed: Invalid token");
    }
  } catch (error) {
    next(error);
  }
};

export default authCheckMiddleware;
