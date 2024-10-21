import { Request, Response } from "express";
import { myWorkServices } from "./myWork.services";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const createMyWork = catchAsync(async (req: Request, res: Response) => {
  // console.log(req.body);
  const result = await myWorkServices.createMyWorkInToDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "create success",
    data: result,
  });
});
const getMyWork = catchAsync(async (req: Request, res: Response) => {
  const result = await myWorkServices.getMyAllWorkFromDB();
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "data retrieve success",
    data: result,
  });
});
const getMySpecificWork = catchAsync(async (req: Request, res: Response) => {
  const {name}=req.params
  const result = await myWorkServices.getMySpecificWorkFromDB(name);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "data retrieve success",
    data: result,
  });
});
const deleteMyWork = catchAsync(async (req: Request, res: Response) => {
  const {id}=req.params
  const result = await myWorkServices.deleteMyWorkFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "delete success",
    data: result,
  });
});
const updateMyWork = catchAsync(async (req: Request, res: Response) => {
  const {id}=req.params
  const result = await myWorkServices.updateMyWorkFromDB(id,req.body);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "update success",
    data: result,
  });
});
export const myWorkController = {
  createMyWork,
  getMySpecificWork,
  getMyWork,
  deleteMyWork,
  updateMyWork
};
