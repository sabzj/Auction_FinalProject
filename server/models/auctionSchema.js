import mongoose from "mongoose";

const auctionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 2,
      trim: true,
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
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Bid = mongoose.model("Bid", auctionSchema);

export default Bid;
