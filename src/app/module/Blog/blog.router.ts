import { Router } from "express";
import { blogController } from "./blog.controller";
import { auth } from "../../middleware/auth";

const router=Router()

router.post("/create",auth("Admin"),blogController.createBlog)
router.get("/",blogController.getBlog)
router.get("/:id",blogController.getSpecificBlog)
router.delete("/delete/:id",auth("Admin"),blogController.deleteBlog)
router.patch("/update/:id",auth("Admin"),blogController.updateBlog)

export const blogRoute=router