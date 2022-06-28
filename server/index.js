import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import postRoutes from "./routes/post.js";
import cors from "cors";
import "dotenv/config";


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());
app.use(cors());
const PORT = 5000;

try {
  mongoose.connect(process.env.DB_URL, () => {
    app.listen(PORT || 5000, () => {
      console.log("Server running at port 5000");
    });
  });
} catch (error) {
  console.log(error);
}
app.use("/posts", postRoutes);
