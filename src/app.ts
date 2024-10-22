import express from "express";
import router from "./app/router";
import cors from "cors";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import cookieParser from "cookie-parser"
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("server is connecting");
});

//global error handler
app.use(globalErrorHandler)

// define router
app.use("/api/v1", router);

export default app;
