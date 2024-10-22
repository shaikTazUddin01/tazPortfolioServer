import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { skillService } from "./skill.services";


const createSkill = catchAsync(async (req, res) => {
  const result = await skillService.createSkillInToDb(req.body);

  sendResponse(res, {
    success:true,
    statusCode: StatusCodes.OK,
    message: "create success",
    data: result,
  });
});
const getSkill = catchAsync(async (req, res) => {
  const result = await skillService.getSkillFromDb();

  sendResponse(res, {
    success:true,
    statusCode: StatusCodes.OK,
    message: "retrieve success",
    data: result,
  });
});


export const skillController={
    createSkill,
    getSkill
}
