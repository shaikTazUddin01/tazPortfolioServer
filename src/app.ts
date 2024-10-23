import express from "express";
import router from "./app/router";
import cors from "cors";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import cookieParser from "cookie-parser"
import notFound from "./app/middleware/notFound";
const app = express();

app.use(express.json());
app.use(cors({
  origin:['http://localhost:3000','https://tazuddin.vercel.app']
}));
app.use(cookieParser())


// define router
app.use("/api/v1", router);

//global error handler
app.use(globalErrorHandler)

app.get("/", (req, res) => {
  res.send("server is connecting");
});


//not found
app.use(notFound)


export default app;
