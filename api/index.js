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
import paymentRoutes from "./routes/paymentRoutes.js";
import productRoutes from "./routes/productRoutes.js";

import cors from "cors";

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
app.use(cors());

app.listen(3000, () => {
  console.log("Server is running on 3000");
});

// Mock Database

// let products = [
//   {
//     _id: 1,
//     name: "iPhone 12 Pro",
//     brand: "Apple",
//     desc: "6.1-inch display",
//     price: 999,
//     image:
//       "https://res.cloudinary.com/dqqynqpwp/image/upload/v1733219632/dfbe0tmvhrcrgaczzrhn.jpg",
//   },
//   {
//     _id: 2,
//     name: "iPhone 12",
//     brand: "Apple",
//     desc: "5.4-inch mini display",
//     price: 699,
//     image:
//       "https://res.cloudinary.com/dqqynqpwp/image/upload/v1733219631/lqnvvrzkxpoxbnjhcafd.png",
//   },
//   {
//     _id: 3,
//     name: "Galaxy S",
//     brand: "Samsung",
//     desc: "6.5-inch display",
//     price: 399,
//     image:
//       "https://res.cloudinary.com/dqqynqpwp/image/upload/v1733219631/z6szavdiejzso9d9pj2n.jpg",
//   },
// ];

// app.get("/products", (req, res) => {
//   res.json(products);
// });

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/carousel", carouselRoutes);
app.use("/api/subscribe", subscribeRoutes);
app.use("/api/form", contactRoutes);
app.use("/api/calendar", eventRoutes);

app.use("/api/payments", paymentRoutes);
app.use("/api", productRoutes);

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
