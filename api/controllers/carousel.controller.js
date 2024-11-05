// controllers/carousel.controller.js
import Carousel from "../models/carousel.model.js";

// Resim ekleme
export const addImage = async (req, res) => {
  const { imageURL } = req.body;
  const newImage = new Carousel({ imageURL });
  try {
    await newImage.save();
    res.status(201).json({ message: "Image uploaded successfully", newImage });
  } catch (error) {
    res.status(500).json({ message: "Error uploading image", error });
  }
};

// Tüm resimleri getirme
export const getImages = async (req, res) => {
  try {
    const images = await Carousel.find();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: "Error fetching images", error });
  }
};

// Resim güncelleme
export const updateImage = async (req, res) => {
  const { id } = req.params;
  const { imageURL } = req.body;
  try {
    const updatedImage = await Carousel.findByIdAndUpdate(
      id,
      { imageURL },
      { new: true }
    );
    res.status(200).json(updatedImage);
  } catch (error) {
    res.status(500).json({ message: "Error updating image", error });
  }
};

// Resim silme
export const deleteImage = async (req, res) => {
  const { id } = req.params;
  try {
    await Carousel.findByIdAndDelete(id);
    res.status(204).json({ message: "Image deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting image", error });
  }
};
