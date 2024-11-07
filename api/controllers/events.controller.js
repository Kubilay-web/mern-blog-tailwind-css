import Event from "../models/event.model.js";

// Olayları getirme
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

export const createEvent = async (req, res) => {
  try {
    // Destructure event data from request body
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
