import { Request, Response } from "express";
import { myWorkServices } from "./myWork.services";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const createMyWork = catchAsync(async (req: Request, res: Response) => {
  const result = await myWorkServices.createMyWorkFromDb(req.body);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "create success",
    data: result,
  });
});
export const myWorkController = {
  createMyWork,
};
