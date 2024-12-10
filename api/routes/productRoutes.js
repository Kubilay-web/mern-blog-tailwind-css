import express from "express";
import {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  upload,
} from "../controllers/productController.js";

const router = express.Router();

// Route for creating a product (image upload included)
router.post("/products", upload, createProduct);

// Route to get all products
router.get("/products", getAllProducts);

// Route for updating a product (image upload included)
router.put("/products/:id", upload, updateProduct);

// Route for deleting a product by ID
router.delete("/products/:id", deleteProduct);

export default router;
