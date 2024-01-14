import Bid from "../models/auctionSchema.js";
import STATUS_CODE from "../constants/statusCodes.js";

// Function to create a new auction
export const createAuction = async (req, res, next) => {
  try {
    // Access authenticated user information from req.user
    const authenticatedUser = req.user;

    // Your logic to create a new auction, e.g., req.body contains auction details
    const newAuction = await Bid.create({
      title: req.body.title,
      description: req.body.description,
      startprice: req.body.startprice,
      currentprice: req.body.currentprice,
      createdBy: authenticatedUser._id, // Assuming you have a createdBy field in your schema
    });

    res.status(STATUS_CODE.CREATED).send(newAuction);
  } catch (error) {
    next(error);
  }
};

// Function to get all auctions
export const getAllAuctions = async (req, res, next) => {
  try {
    const auctions = await Bid.find();
    res.json(auctions);
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
    return res.json(auction);
  } catch (error) {
    next(error);
  }
};

// Function to update an existing auction
export const updateAuction = async (req, res, next) => {
  try {
    // Access authenticated user information from req.user
    const authenticatedUser = req.user;

    // Your logic to update an existing auction, e.g., req.params.id contains auction ID
    const updatedAuction = await Bid.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          startprice: req.body.startprice,
          currentprice: req.body.currentprice,
        },
      },
      { new: true }
    );

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
    // Access authenticated user information from req.user
    const authenticatedUser = req.user;

    // Your logic to delete an existing auction, e.g., req.params.id contains auction ID
    const deletedAuction = await Bid.findByIdAndRemove(req.params.id);

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
