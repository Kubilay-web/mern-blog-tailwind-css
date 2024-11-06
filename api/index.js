import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import carouselRoutes from "./routes/carousel.route.js";
import subscribeRoutes from "./routes/subscribe.route.js";
import contactRoutes from "./routes/contact.route.js";
import eventRoutes from "./routes/event.route.js";

import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log("MongoDB is connected");
});

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/carousel", carouselRoutes);
app.use("/api/subscribe", subscribeRoutes);
app.use("/api/form", contactRoutes);
app.use("/api/calendar", eventRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
