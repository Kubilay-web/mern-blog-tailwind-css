// controllers/event.controller.js
import Event from "../models/event.model.js";

// Olayları getirme
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
};

// Yeni bir olay ekleme
export const createEvent = async (req, res) => {
  const { event_date, event_title, event_theme } = req.body;

  const newEvent = new Event({
    event_date,
    event_title,
    event_theme,
  });

  try {
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error });
  }
};
