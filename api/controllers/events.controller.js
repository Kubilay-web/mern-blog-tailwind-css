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

// Olayı güncelleme
export const updateEvent = async (req, res) => {
  const { eventId } = req.params; // Get eventId from URL params
  const { event_date, event_title, event_theme } = req.body;

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      eventId, // The ID of the event to update
      { event_date, event_title, event_theme }, // New values for the event
      { new: true } // Return the updated event after update
    );

    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json(updatedEvent); // Return the updated event
  } catch (error) {
    res.status(500).json({ message: "Error updating event", error });
  }
};

// Olayı silme
export const deleteEvent = async (req, res) => {
  const { eventId } = req.params; // Get eventId from URL params

  try {
    const deletedEvent = await Event.findByIdAndDelete(eventId); // Delete the event by ID

    if (!deletedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json({ message: "Event deleted successfully" }); // Confirmation message
  } catch (error) {
    res.status(500).json({ message: "Error deleting event", error });
  }
};
