import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(5555, () => {
  console.log("Server listening on port 5555");
});
