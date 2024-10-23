import { Router } from "express";
import { skillController } from "./skill.controller";
import { auth } from "../../middleware/auth";


const router=Router()

router.post("/create",auth("Admin"),skillController.createSkill)
router.get("/",skillController.getSkill)
router.delete("/delete/:id",auth("Admin"),skillController.deleteSkill)
router.patch("/update/:id",auth("Admin"),skillController.updateSkill)


export const skillRoute=router