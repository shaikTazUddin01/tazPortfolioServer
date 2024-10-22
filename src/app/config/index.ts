/* eslint-disable no-undef */
import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  dbUrl: process.env.DB_URL,
  accessToken_Secret:process.env.ACCESSTOKEN_SECRET,
  accessToken_Expiresin:process.env.ACCESSTOKEN_EXPIRESIN,
  refreshToken_Secret:process.env.REFRESHTOKEN_SECRET,
  refreshToken_Expiresin:process.env.REFRESHTOKEN_EXPIRESIN,

};
