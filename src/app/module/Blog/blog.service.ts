import { IBlog } from "./blog.inteface";
import { Blog } from "./blog.model";

const createBlogInToDb=async(payload:IBlog)=>{
    const result=await Blog.create(payload)

    return result
}

export const blogService={
    createBlogInToDb
}