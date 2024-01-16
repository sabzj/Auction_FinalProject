import mongoose from "mongoose";

const auctionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 2,
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      // type: String,

      ref: "User",
      required: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
      trim: true,
    },
    startprice: {
      type: Number,
      required: true,
      default: 0,
    },
    currentprice: {
      type: Number,
      default: 0,
    },
    address: {
      type: String,
      required: true,
      minlength: 5,
      trim: true,
    },
  },

  { timestamps: true }
);

const Bid = mongoose.model("Bid", auctionSchema);

export default Bid;
