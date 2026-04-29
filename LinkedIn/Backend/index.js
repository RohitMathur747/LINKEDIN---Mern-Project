import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

let app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

let port = process.env.PORT || 5000;
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  connectDB();
  console.log(`server is running on port ${port}`);
});
