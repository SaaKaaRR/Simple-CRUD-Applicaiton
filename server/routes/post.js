import express from "express";
const router = express.Router();
import { getPost, createPost, updatePost, deletePost } from "../controllers/posts.js";

router.get("/",getPost);
router.post("/",createPost);
router.put("/",updatePost);
router.delete("/",deletePost);
export default router;
