import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRoutes.js";

dotenv.config();

let app = express();
let port = process.env.PORT || 5000;
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  connectDB();
  console.log(`server is running on port ${port}`);
});
