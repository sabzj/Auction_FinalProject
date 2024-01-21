import Bid from "../models/auctionSchema.js";
import STATUS_CODE from "../constants/statusCodes.js";
import { uploadImage } from "./cloudinaryController.js";
import { isValidObjectId } from "mongoose";

// Function to create a new auction
export const createAuction = async (req, res, next) => {
  try {
    console.log(req.body);

    //  create a new auction
    const { title, description, address, startprice, createdBy, category } =
      req.body;
    //! do the validation here
    const { file } = req;
    //! do the validation here
    const { url, public_id } = await uploadImage(file.path);
    //! do the validation here

    const newAuction = await Bid.create({
      title,
      description,
      startprice,
      address,
      createdBy,
      category,
      image: url,
      publicId: public_id,
    });

    res.status(STATUS_CODE.CREATED).send(newAuction);
  } catch (error) {
    next(error);
  }
};

// Function to get all auctions
export const getAllAuctions = async (req, res, next) => {
  try {
    const auctions = await Bid.find({});
    res.status(STATUS_CODE.OK);
    res.send(auctions);
    console.log(auctions);
  } catch (error) {
    next(error);
  }
};

// Function to getAuctionById
export const getAuctionById = async (req, res, next) => {
  try {
    //get the id from params
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      throw new Error("ID not Valid");
    }
    //find the auction
    const auction = await Bid.findById(id);
    //check if exist
    if (!auction) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("auction not found");
    }
    //send the auction
    return res.send(auction);
  } catch (error) {
    next(error);
  }
};

// Function to update an existing auction
export const updateAuction = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Access authenticated user information from req.user
    // const authenticatedUser = req.user;

    // update an existing auction, contains auction ID
    const updatedAuction = await Bid.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedAuction) {
      res.status(STATUS_CODE.NOT_FOUND).send({ error: "Auction not found" });
      return;
    }

    // Check if the authenticated user is the creator of the auction
    if (
      updatedAuction.createdBy.toString() !== authenticatedUser._id.toString()
    ) {
      res
        .status(STATUS_CODE.UNAUTHORIZED)
        .send({ error: "Not authorized to update this auction" });
      return;
    }

    res.status(STATUS_CODE.OK).send(updatedAuction);
  } catch (error) {
    next(error);
  }
};

// Function to delete an existing auction
export const deleteAuction = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Access authenticated user information from req.user
    // const authenticatedUser = req.user;

    // delete an existing auction, contains auction ID
    const deletedAuction = await Bid.findByIdAndRemove(id);

    if (!deletedAuction) {
      res.status(STATUS_CODE.NOT_FOUND).send({ error: "Auction not found" });
      return;
    }

    // Check if the authenticated user is the creator of the auction
    if (
      deletedAuction.createdBy.toString() !== authenticatedUser._id.toString()
    ) {
      res
        .status(STATUS_CODE.UNAUTHORIZED)
        .send({ error: "Not authorized to delete this auction" });
      return;
    }

    res.status(STATUS_CODE.OK).send(deletedAuction);
  } catch (error) {
    next(error);
  }
};
