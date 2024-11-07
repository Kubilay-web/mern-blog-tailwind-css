import Event from "../models/event.model.js";

// Olayları getirme (Get Events)
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();

    // Olayları ScheduleXCalendar formatına uygun olarak dön
    const formattedEvents = events.map((event) => ({
      id: event._id.toString(), // Ensure id is a string
      title: event.title,
      start: event.start.toISOString().split("T")[0], // Format as YYYY-MM-DD
      end: event.end.toISOString().split("T")[0], // Format as YYYY-MM-DD
      theme: event.theme,
    }));

    res.status(200).json(formattedEvents);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
};

// Yeni event oluşturma (Create Event)
export const createEvent = async (req, res) => {
  try {
    const { title, start, end, theme } = req.body;

    // Ensure required fields are present
    if (!title || !start || !end || !theme) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new Event document in the database
    const newEvent = new Event({
      title,
      start: new Date(start), // Assuming start and end are ISO date strings from the client
      end: new Date(end),
      theme,
    });

    // Save the new event to the database
    const savedEvent = await newEvent.save();

    // Format the new event for ScheduleXCalendar format
    const formattedEvent = {
      id: savedEvent._id.toString(), // Ensure id is a string
      title: savedEvent.title,
      start: savedEvent.start.toISOString().split("T")[0], // Format as YYYY-MM-DD
      end: savedEvent.end.toISOString().split("T")[0], // Format as YYYY-MM-DD
      theme: savedEvent.theme,
    };

    res.status(201).json({ event: formattedEvent }); // Return the newly created event in the correct format
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Error creating event", error });
  }
};

// Event güncelleme (Update Event)
export const updateEvent = async (req, res) => {
  try {
    const { eventId } = req.params; // Retrieve eventId from URL parameter
    const { title, start, end, theme } = req.body;

    // Find the event by ID
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Update the event fields
    event.title = title || event.title;
    event.start = start ? new Date(start) : event.start; // Make sure to handle the date conversion
    event.end = end ? new Date(end) : event.end;
    event.theme = theme || event.theme;

    // Save the updated event
    const updatedEvent = await event.save();

    // Format the updated event for ScheduleXCalendar format
    const formattedEvent = {
      id: updatedEvent._id.toString(),
      title: updatedEvent.title,
      start: updatedEvent.start.toISOString().split("T")[0], // Format as YYYY-MM-DD
      end: updatedEvent.end.toISOString().split("T")[0], // Format as YYYY-MM-DD
      theme: updatedEvent.theme,
    };

    res.status(200).json({ event: formattedEvent }); // Return the updated event
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ message: "Error updating event", error });
  }
};

// Event silme (Delete Event)
export const deleteEvent = async (req, res) => {
  try {
    const { eventId } = req.params; // Retrieve eventId from URL parameter

    // Find and delete the event by ID
    const event = await Event.findByIdAndDelete(eventId);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ message: "Error deleting event", error });
  }
};
