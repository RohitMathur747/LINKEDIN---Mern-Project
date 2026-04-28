import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import genToken from "../config/token.js";

//register
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
      userName,
      email,
      password: hashedPassword,
    });

    let token = await genToken(user._id);
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

//login
export const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ message: "User Does not   already exists !" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    let token = await genToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "strict",
      secure: process.env.NODE_ENVIRONMENT === "production",
    });

    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Log in Error" });
    console.log(error);
  }
};

//logout
export const logOut = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logout Successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Log out Error" });
    console.log(error);
  }
};
