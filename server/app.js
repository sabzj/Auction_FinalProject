import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import usersRouter from "./routes/users.routes.js";
import auctionsRouter from "./routes/auctions.routes.js";
import mailerRouter from "./routes/mailer.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";

// const uploadRouter = require("./controllers/cloudinaryRoute.js");

const app = express();
dotenv.config();

// cors middleware

// To handle CORS fors do "npm i cors"
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://65b15baa3cf8c432fadd4d5e--monumental-dodol-772dc0.netlify.app/",
    ],
    credentials: true,
  })
);

// Middleware to JSON parsing
app.use(express.json());

// users and auctions Routes
app.use("/api/users", usersRouter);
app.use("/api/auctions", auctionsRouter);
app.use("/", mailerRouter);

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 2626;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is listening to ${PORT}`);
  });
});
