// models/event.model.js
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  event_date: {
    type: Date,
    required: true,
  },
  event_title: {
    type: String,
    required: true,
  },
  event_theme: {
    type: String,
    required: true,
    enum: ["blue", "red", "green", "yellow", "purple"],
  },
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
