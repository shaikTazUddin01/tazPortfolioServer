import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { blogService } from "./blog.service";

const createBlog = catchAsync(async (req, res) => {
  const result = await blogService.createBlogInToDb(req.body);

  sendResponse(res, {
    success:true,
    statusCode: StatusCodes.OK,
    message: "create success",
    data: result,
  });
});
const getBlog = catchAsync(async (req, res) => {
  const result = await blogService.getBlogFromDb();

  sendResponse(res, {
    success:true,
    statusCode: StatusCodes.OK,
    message: "retrieve success",
    data: result,
  });
});

const getSpecificBlog = catchAsync(async (req, res) => {
    const {id}=req.params
  const result = await blogService.getSpecificBlog(id);
  sendResponse(res, {
    success:true,
    statusCode: StatusCodes.OK,
    message: "retrieve success",
    data: result,
  });
});

export const blogController={
    createBlog,
    getBlog,getSpecificBlog
}
