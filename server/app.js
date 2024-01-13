import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

const app = express();
dotenv.config();

//middlleware

app.use(express.json);
app.use(cors());

// app.use("") router
// app.use("") router

const PORT = process.env.PORT || 2626;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is listening to ${PORT}`);
  });
});
