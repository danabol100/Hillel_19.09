const express = require("express");
const cors = require("cors");
const loginModel = require("./mongo/login.model");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const JWT_SECRET = "diploma_secret_123";

mongoose
  .connect(
    "mongodb+srv://danabol100_db_user:admin123@cluster0.aoxs54s.mongodb.net/auth?retryWrites=true&w=majority",
  )
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.error("DB connection error:", err));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// async function createAdmin() {
//   const existing = await loginModel.findOne({ login: "mytestadmin" });
//   if (existing) {
//     console.log("Admin already exists:", existing.login);
//     return;
//   }
//   createAdmin();
//   const passwordHash = await bcrypt.hash("test123", 10);
//   await loginModel.create({ login: "mytestadmin", passwordHash });
//   console.log("Admin created:", "mytestadmin / test123");
// }

app.use(cookieParser());
app.use(express.json());

app.post("/login", async (req, res) => {
  const { login, password } = req.body;
  console.log("Request body:", req.body);

  try {
    const user = await loginModel.findOne({ login });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }
    console.log("Attempt login:", login, password);
    console.log("User in DB:", user);

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1m",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60000,
    });

    res.json({ success: true, message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

app.get("/profile", authMiddleware, async (req, res) => {
  const user = await loginModel.findById(req.userId);
  res.json({ login: user.login });
});

app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ success: true, message: "Logout successful" });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
