// models/carousel.model.js
import mongoose from "mongoose";

const carouselSchema = new mongoose.Schema({
  imageURL: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Carousel", carouselSchema);
