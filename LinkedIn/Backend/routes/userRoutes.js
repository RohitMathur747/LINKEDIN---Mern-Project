import express from "express";
import { getCurrentUser } from "../controllers/userController";
import isAuth from "../middlewares/isAuth";

const userRouter = express.Router();

userRouter.get("/currentuser", isAuth, getCurrentUser);

export default userRouter;
