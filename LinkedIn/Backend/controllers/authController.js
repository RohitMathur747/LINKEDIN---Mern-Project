import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import genToken from "../config/token.js";

export const signup = async (req, res) => {
  try {
    let { firstName, lastName, userName, email, password } = req.body;

    let existEmail = await User.findOne({ email });

    if (existEmail) {
      return res.status(400).json({ message: "User Email  already exists !" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password Must be Atleast 8 Chararcters" });
    }

    let existUserName = await User.findOne({ userName });

    if (existUserName) {
      return res.status(400).json({ message: "User Name already exists !" });
    }

    let hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    let token = await genToken(user_.id);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "strict",
      secure: process.env.NODE_ENVIRONMENT === "production",
    });

    res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Sign up Error" });
    console.log(error);
  }
};
