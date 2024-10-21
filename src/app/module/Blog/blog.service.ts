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

export const blogService={
    createBlogInToDb,
    getBlogFromDb,
    getSpecificBlog
}