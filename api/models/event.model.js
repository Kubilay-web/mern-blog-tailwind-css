import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  theme: {
    type: String,
    required: true,
    enum: ["blue", "red", "green", "yellow", "purple"],
  },
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
