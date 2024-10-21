import { Router } from "express";
import { myWorkController } from "./myWork.controller";

const router=Router()

router.post('/create',myWorkController.createMyWork)
router.get('/',myWorkController.getMyWork)
router.get('/:name',myWorkController.getMySpecificWork)
router.delete('/delete/:id',myWorkController.deleteMyWork)
router.patch('/update/:id',myWorkController.updateMyWork)

export const myWorkRoute=router
