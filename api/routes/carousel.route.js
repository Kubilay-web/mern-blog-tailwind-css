// routes/carousel.routes.js
import express from "express";
import {
  addImage,
  getImages,
  updateImage,
  deleteImage,
} from "../controllers/carousel.controller.js";

const router = express.Router();

router.post("/upload", addImage); // Resim yükleme
router.get("/getAllImage", getImages); // Tüm resimleri getirme
router.put("/:id", updateImage); // Resim güncelleme
router.delete("/:id", deleteImage); // Resim silme

export default router;
