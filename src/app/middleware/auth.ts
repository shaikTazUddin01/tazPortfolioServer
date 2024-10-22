import { StatusCodes } from "http-status-codes";
import config from "../config";
import { AppError } from "../error/AppErrors";
import { User } from "../module/User/User";
import catchAsync from "../utils/catchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";

export const auth = (...requiredRole: any) => {
  return catchAsync(async (req, res, next) => {
    const decoded = jwt.verify(
      req?.headers?.authorization as string,
      config.accessToken_Secret as string
    );

    const { userId, userEmail, userRole } = decoded as JwtPayload;

    const isUserExists = await User.findOne({ _id: userId, email: userEmail });
    if (!isUserExists) {
      throw new AppError(StatusCodes.UNAUTHORIZED, "you are not authorization");
    }
    if (requiredRole && !requiredRole.includes(userRole)) {
      throw new AppError(StatusCodes.UNAUTHORIZED, "you are not authorization");
    }
    next();
  });
};
