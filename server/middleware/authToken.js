import jwt from "jsonwebtoken";
import STATUS_CODE from "../constants/statusCodes.js";
import User from "../models/userSchema.js";

const authCheckMiddleware = async (req, res, next) => {
  try {
    // Extract the token from the Authorization header
    const authorizationHeader = req.header("Authorization");
    console.log(req.headers);

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      res.status(STATUS_CODE.UNAUTHORIZED);
      throw new Error("Authorization failed: Invalid token format");
    }

    const token = req.header("Authorization").split("Bearer ")[1];

    if (!token) {
      res.status(STATUS_CODE.UNAUTHORIZED);
      throw new Error("Authorization failed: No token provided");
    }

    // Verify the token
    const userSecretKey = SERVERKEY;
    try {
      const decoded = jwt.verify(token, userSecretKey);
      // Find the user in the database based on the decoded token
      const user = await User.findOne({
        _id: decoded.id,
        email: decoded.email,
        userType: decoded.userType,
      });

      if (!user) {
        res.status(STATUS_CODE.UNAUTHORIZED);
        throw new Error("Authorization failed: User not found");
      }

      // Set the authenticated user information in the request object
      req.user = user;

      // Continue to the next middleware or route handler
      next();
    } catch (error) {
      res.status(STATUS_CODE.UNAUTHORIZED);
      throw new Error("Authorization failed: Invalid token");
    }
  } catch (error) {
    next(error);
  }
};

export default authCheckMiddleware;
