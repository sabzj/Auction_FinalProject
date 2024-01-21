import mongoose from "mongoose";

const imagesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      trim: true,
    },
  },

  { timestamps: true }
);

const Images = mongoose.model("Images", imagesSchema);

export default Bid;
