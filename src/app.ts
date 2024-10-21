import express from "express";
import router from "./app/router";
import cors from "cors";
import globalErrorHandler from "./app/middleware/globalErrorHandler";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is connecting");
});

//global error handler
app.use(globalErrorHandler)

// define router
app.use("/api/v1", router);

export default app;
