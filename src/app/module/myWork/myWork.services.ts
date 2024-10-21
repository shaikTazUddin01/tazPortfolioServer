import { IMyWork } from "./myWork.interface";
import { MyWork } from "./myWork.model";

const createMyWorkInToDB=async(payload:IMyWork)=>{
    const res=await MyWork.create(payload)
    return res
}
const getMyAllWorkFromDB=async()=>{
    const res=await MyWork.find()
    return res
}
const getMySpecificWorkFromDB=async(name:string)=>{
    const res=await MyWork.findOne({name})
    return res
}
const deleteMyWorkFromDB=async(id:string)=>{
    const res=await MyWork.deleteOne({_id:id})
    return res
}
const updateMyWorkFromDB=async(id:string,payload:IMyWork)=>{
    const res=await MyWork.updateOne({_id:id},payload,{new:true})
    return res
}

export const myWorkServices={
    createMyWorkInToDB,
    getMyAllWorkFromDB,
    getMySpecificWorkFromDB,
    deleteMyWorkFromDB,
    updateMyWorkFromDB
}