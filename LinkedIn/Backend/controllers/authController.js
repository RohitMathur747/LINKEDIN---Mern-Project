import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

export const signup = async (req, res) => {
  try {
    let { firstName, userName, email, password } = req.body;

    let existEmail = await User.findOne({ email });

    if (existEmail) {
      return res.status(400).json({ message: "User Email  already exists !" });
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

    res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
