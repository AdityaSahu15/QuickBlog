import express from "express"
import upload from "../middleware/multer.js";
import { addBlog } from "../controllers/blogController.js";
import auth from "../middleware/auth.js";

const blogRouter=express.Router();

blogRouter.post("/add",upload.single('image'),auth,addBlog);

export default blogRouter;