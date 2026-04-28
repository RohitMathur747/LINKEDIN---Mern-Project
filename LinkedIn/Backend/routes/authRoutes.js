import express from "express";
import { login, logOut, signup } from "../controllers/authController.js";

let authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logOut);

export default authRouter;
