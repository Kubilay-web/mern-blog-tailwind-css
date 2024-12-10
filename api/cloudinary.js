import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

// Cloudinary konfigürasyonu
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME, // Cloudinary Cloud adı
  api_key: process.env.CLOUD_API_KEY, // API anahtarınız
  api_secret: process.env.CLOUD_API_SECRET, // API gizliliğiniz
});

export default cloudinary;
