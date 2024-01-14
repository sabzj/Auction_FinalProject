import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Must provide a Name"],
    },
    email: {
      type: String,
      unique: "Email already exists",
      required: [true, "Must provide email"],
      match: [/^\S+@\S+\.\S+$/, "Please add a valid email"],
    },
    password: {
      type: String,
      required: true,
    },
    creditcard: {
      type: Number,
      required: [true, "Must provide creditcard number"],
    },

    // Set a default role if not provided during user creation
    role: {
      type: String,
      default: "user",
    },
  },
  // This timestamp option automatically adds two fields, createdAt and updatedAt
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
