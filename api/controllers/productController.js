import Product from "../models/productModel.js";
import cloudinary from "cloudinary";
import multer from "multer";
import streamifier from "streamifier"; // Import the streamifier to convert buffer to stream

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Multer configuration to handle file uploads in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single("image"); // Accepting single image upload

// Create new product
export const createProduct = async (req, res) => {
  try {
    const { name, brand, desc, price } = req.body;
    const file = req.file;

    // Check if file is uploaded
    if (!file) {
      return res.status(400).json({ error: "No image uploaded" });
    }

    // Convert buffer to readable stream for Cloudinary
    const stream = cloudinary.v2.uploader.upload_stream(
      { resource_type: "auto", folder: "product_images" },
      async (error, result) => {
        if (error) {
          return res.status(500).json({ error: "Error uploading image" });
        }

        // Create new product with image URL from Cloudinary
        const newProduct = new Product({
          name,
          brand,
          desc,
          price,
          image: result.secure_url, // Cloudinary URL of the uploaded image
        });

        // Save the new product to MongoDB
        await newProduct.save();

        // Respond with the created product
        res.status(201).json(newProduct);
      }
    );

    // Pipe the buffer to the stream
    streamifier.createReadStream(file.buffer).pipe(stream);
  } catch (error) {
    console.error("Error uploading product:", error);
    res.status(500).json({ error: error.message });
  }
};

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update product by ID
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, brand, desc, price } = req.body;
    const file = req.file;

    // Find the product by ID
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    let updatedImageUrl = product.image; // Default to current image if no new image uploaded

    // If a new image is uploaded, upload it to Cloudinary and update the URL
    if (file) {
      // Upload the new image to Cloudinary
      const stream = cloudinary.v2.uploader.upload_stream(
        { resource_type: "auto", folder: "product_images" },
        async (error, result) => {
          if (error) {
            return res.status(500).json({ error: "Error uploading image" });
          }

          updatedImageUrl = result.secure_url;

          // Update product details
          product.name = name || product.name;
          product.brand = brand || product.brand;
          product.desc = desc || product.desc;
          product.price = price || product.price;
          product.image = updatedImageUrl;

          // Save updated product to MongoDB
          await product.save();

          res.status(200).json(product);
        }
      );

      // Pipe the new image buffer to Cloudinary
      streamifier.createReadStream(file.buffer).pipe(stream);
    } else {
      // If no new image, just update the text fields
      product.name = name || product.name;
      product.brand = brand || product.brand;
      product.desc = desc || product.desc;
      product.price = price || product.price;

      // Save updated product to MongoDB
      await product.save();

      res.status(200).json(product);
    }
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: error.message });
  }
};

// Delete product by ID
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the product by ID and delete
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Respond with success message
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: error.message });
  }
};

export { upload };
