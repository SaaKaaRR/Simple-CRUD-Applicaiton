import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import postRoutes from "./routes/post.js";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = 5000;
const DB_URL ="mongodb+srv://discussionforum:sakar12312@cluster0.6ji4z.mongodb.net/?retryWrites=true&w=majority";

try {
  mongoose.connect(DB_URL, () => {
    app.listen(PORT, () => {
      console.log("Server running at port 5000");
    });
  });
} catch (error) {
  console.log(error);
}
app.use("/posts", postRoutes);
