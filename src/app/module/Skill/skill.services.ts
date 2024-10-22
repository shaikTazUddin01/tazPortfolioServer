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


export const skillService={
    createSkillInToDb,
    getSkillFromDb,
    
}