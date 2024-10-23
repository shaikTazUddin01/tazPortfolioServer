import { ISkill } from "./skill.interface"
import { Skill } from "./skill.model"


const createSkillInToDb=async(payload:ISkill)=>{
    const result=await Skill.create(payload)

    return result
}
const getSkillFromDb=async()=>{
    const result=await Skill.find()

    return result
}


const deleteSkillFromDB=async(id:string)=>{
    const res=await Skill.deleteOne({_id:id})
    return res
}
const updateSkillFromDB=async(id:string,payload:ISkill)=>{
    const res=await Skill.updateOne({_id:id},payload,{new:true})
    return res
}

export const skillService={
    createSkillInToDb,
    getSkillFromDb,
    deleteSkillFromDB,
    updateSkillFromDB
    
}