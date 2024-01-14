import STATUS_CODE from "../constants/statusCodes.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

export const createUser = async (req, res, next) => {
  try {
    //* gett the data from body
    const { username, email, password, role } = req.body;
    //* if the user correctly filled the fields or no field missing
    if ((!email, password, role)) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("Email, password and role are required");
    }
    //* find the user in DB
    const checkUserInDb = await UserActivation.findOne({ email });
    // check if user exist
    if (checkUserInDb) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("User exists in DB");
    }
    // hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    // create new user
    const newUser = await User.create({
      username,
      email,
      password,
      role,
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("User not found");
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(STATUS_CODE.UNAUTHORIZED);
      throw new Error("Invalid credentials");
    }

    // Create a JWT token for authentication
    const token = jwt.sign(
      { id: user._id, email: user.email },
      "yourSecretKey",
      {
        expiresIn: "1h", // Token expires in 1 hour
      }
    );

    res.status(STATUS_CODE.OK).json({ token });
  } catch (error) {
    next(error);
  }
};

export const userProfile = async (req, res, next) => {
  try {
    // Retrieve user information from the authenticated user's token (You might want to implement authentication middleware for this)
    const user = req.user;

    res.status(STATUS_CODE.OK).json(user);
  } catch (error) {
    next(error);
  }
};
