import { StatusCodes } from "http-status-codes";
import { AppError } from "../../error/AppErrors";
import { User } from "../User/User";
import { IAuth } from "./auth.interface";
import jwt from "jsonwebtoken";
import config from "../../config";

const login = async (payload: IAuth) => {
  const isUserExists = await User?.findOne(payload);

  if (!isUserExists) {
    throw new AppError(
      StatusCodes.UNAUTHORIZED,
      "Please Login in with Right Information"
    );
  }
  const userInfo = {
    userId: isUserExists?._id,
    userName: isUserExists?.name,
    UserEmail: isUserExists?.email,
    UserRole: isUserExists?.role,
  };
  const accessToken = jwt.sign(userInfo, config.accessToken_Secret as string, {
    expiresIn: config.accessToken_Expiresin,
  });
  const refreshToken = jwt.sign(
    userInfo,
    config.refreshToken_Secret as string,
    { expiresIn: config.refreshToken_Expiresin }
  );

  return { accessToken, refreshToken };
};

export const authService = {
  login,
};
