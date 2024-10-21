import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is connecting");
});


export default app