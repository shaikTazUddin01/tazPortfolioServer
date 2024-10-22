import { Router } from "express";
import { skillController } from "./skill.controller";


const router=Router()

router.post("/create",skillController.createSkill)
router.get("/",skillController.getSkill)


export const skillRoute=router