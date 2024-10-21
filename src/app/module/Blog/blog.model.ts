import { model, Schema } from "mongoose";
import { IBlog } from "./blog.inteface";

const blogSchema=new Schema<IBlog>({
    title: { type: String, required: true,unique:true },
    image: { type: String, required: true },
    details: { type: String, required: true },
})

export const Blog =model<IBlog>("Blog",blogSchema)