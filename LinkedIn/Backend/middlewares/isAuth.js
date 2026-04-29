import jwt from "jsonwebtoken";

const isAuth = async () => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(400).json({ message: "user doesn't have token" });
    }
    let verifyToken = await jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken) {
      return res.status(400).json({ message: "user doesn't have valid token" });
    }
    req.userId = verifyToken.id;
    next();
  } catch (error) {
    return res.status(500).json({ message: "IsAuth  Error" });
  }
};

export default isAuth;
