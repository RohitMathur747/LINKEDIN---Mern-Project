import express from "express";
import { signup } from "../controllers/authController.js";

let authRouter = express.Router();

authRouter.post("/signup", signup);

export default authRouter;
