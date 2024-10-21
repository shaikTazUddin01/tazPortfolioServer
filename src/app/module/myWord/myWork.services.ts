import { IMyWork } from "./myWork.interface";
import { MyWork } from "./myWork.model";

const createMyWorkFromDb=async(payload:IMyWork)=>{
    const res=await MyWork.create(payload)
    return res
}

export const myWorkServices={
    createMyWorkFromDb
}