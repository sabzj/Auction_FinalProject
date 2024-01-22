import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
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
  creditcardNumber: {
    type: String,
    required: [true, "Must provide creditcard number"],

    validate: {
      validator: function (value) {
        // Use regex to check for numbers only and a maximum length of 16
        return /^[0-9]{1,16}$/.test(value);
      },
      message:
        "Credit card number must contain numbers only and have a maximum length of 16 characters",
    },
  },
  expirationDate: {
    type: String,
    required: true,
    // You might want to add additional validation for the format (MM/YY).
    validate: /^(0[1-9]|1[0-2])\/\d{2}$/,
  },
  cvv: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Validate CVV as exactly three numbers
        return /^\d{3}$/.test(value);
      },
      message: (props) =>
        `${props.value} is not a valid CVV (must be 3 numbers)`,
    },
  },
  // Set a default role if not provided during user creation
  role: {
    type: String,
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);

export default User;
