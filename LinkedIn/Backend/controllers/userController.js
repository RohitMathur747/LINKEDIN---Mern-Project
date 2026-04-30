import User from "../models/userModel.js";

export const getCurrentUser = async (req, res) => {
  try {
    const id = req.userId;
    console.log(id);
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      res.status(400).json({ message: "User Does not Found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "getting current user error" });
  }
};
