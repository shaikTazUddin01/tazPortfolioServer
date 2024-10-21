import { Router } from "express";
import { myWorkController } from "./myWork.controller";

const router=Router()

router.post('/create',myWorkController.createMyWork)

export const myWorkRoute=router
