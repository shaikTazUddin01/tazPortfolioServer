import { Router } from "express";
import { blogController } from "./blog.controller";

const router=Router()

router.post("/create",blogController.createBlog)
router.get("/",blogController.getBlog)
router.get("/:id",blogController.getSpecificBlog)

export const blogRoute=router