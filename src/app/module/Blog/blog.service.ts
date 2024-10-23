import { IBlog } from "./blog.inteface";
import { Blog } from "./blog.model";

const createBlogInToDb=async(payload:IBlog)=>{
    const result=await Blog.create(payload)

    return result
}
const getBlogFromDb=async()=>{
    const result=await Blog.find()

    return result
}
const getSpecificBlog=async(id:string)=>{
    const result=await Blog.findById(id)

    return result
}


const deleteBlogFromDB=async(id:string)=>{
    const res=await Blog.deleteOne({_id:id})
    return res
}
const updateBlogFromDB=async(id:string,payload:IBlog)=>{
    const res=await Blog.updateOne({_id:id},payload,{new:true})
    return res
}

export const blogService={
    createBlogInToDb,
    getBlogFromDb,
    getSpecificBlog,
    deleteBlogFromDB,
    updateBlogFromDB
}