import { Modal, Table, Button, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function DashEvents() {
  const { currentUser } = useSelector((state) => state.user);
  const [events, setEvents] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [eventIdToDelete, setEventIdToDelete] = useState("");
  const [eventToEdit, setEventToEdit] = useState({
    id: "",
    title: "",
    theme: "",
    start: "",
    end: "",
  });

  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    theme: "",
  });

  const [filters, setFilters] = useState({
    title: "",
    theme: "",
    date: "",
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/api/calendar/events");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    if (currentUser.isAdmin) {
      fetchEvents();
    }
  }, [currentUser._id]);

  const handleAddEvent = async () => {
    try {
      // Format the new event data to fit the ScheduleX format
      const eventData = {
        title: newEvent.title,
        start: newEvent.start,
        end: newEvent.end,
        theme: newEvent.theme,
      };
      // POST request to add a new event
      const res = await axios.post("/api/calendar/events", eventData);

      if (res.status === 201) {
        setEvents((prev) => [...prev, res.data.event]);
        setNewEvent({ title: "", start: "", end: "", theme: "" });
      }
    } catch (error) {
      console.error("Error adding event:", error);
      alert("Error adding event, please try again.");
    }
  };

  const handleShowMore = async () => {
    const startIndex = events.length;
    try {
      const res = await axios.get(
        `/api/calendar/events?startIndex=${startIndex}`
      );
      const data = res.data;
      setEvents((prev) => [...prev, ...(data.events || [])]);
      if (data.events && data.events.length < 9) {
        setShowMore(false);
      }
    } catch (error) {
      console.error("Error fetching more events:", error);
    }
  };

  const handleDeleteEvent = async () => {
    setShowModal(false);
    try {
      const res = await axios.delete(`/api/calendar/events/${eventIdToDelete}`);
      if (res.status === 200) {
        setEvents((prev) =>
          prev.filter((event) => event.id !== eventIdToDelete)
        );
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredEvents = events.filter((event) => {
    const titleMatch = event.title
      .toLowerCase()
      .includes(filters.title.toLowerCase());
    const themeMatch = event.theme
      .toLowerCase()
      .includes(filters.theme.toLowerCase());
    const dateMatch = filters.date
      ? new Date(event.start).toLocaleDateString() ===
        new Date(filters.date).toLocaleDateString()
      : true;

    return titleMatch && themeMatch && dateMatch;
  });

  const handleEditEvent = (event) => {
    setEventToEdit({
      id: event.id,
      title: event.title,
      theme: event.theme,
      start: event.start,
      end: event.end,
    });
    setShowEditModal(true);
  };

  const handleUpdateEvent = async () => {
    try {
      const res = await axios.put(
        `/api/calendar/events/${eventToEdit.id}`,
        eventToEdit
      );
      if (res.status === 200) {
        setEvents((prev) =>
          prev.map((event) =>
            event.id === eventToEdit.id ? res.data.event : event
          )
        );
        setShowEditModal(false);
      }
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3">
      {currentUser.isAdmin && (
        <div className="mb-4">
          {/* Event Title */}
          <TextInput
            label="Event Title"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
            className="mr-2 p-2 border border-gray-300 rounded"
            required
          />

          {/* Start Date */}
          <TextInput
            label="Start Date"
            type="datetime-local"
            value={newEvent.start}
            onChange={(e) =>
              setNewEvent({ ...newEvent, start: e.target.value })
            }
            className="mr-2 p-2 border border-gray-300 rounded"
            required
          />

          {/* End Date */}
          <TextInput
            label="End Date"
            type="datetime-local"
            value={newEvent.end}
            onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
            className="mr-2 p-2 border border-gray-300 rounded"
            required
          />

          {/* Event Theme */}
          <TextInput
            label="Theme"
            placeholder="Event Theme"
            value={newEvent.theme}
            onChange={(e) =>
              setNewEvent({ ...newEvent, theme: e.target.value })
            }
            className="mr-2 p-2 border border-gray-300 rounded"
            required
          />

          {/* Add Event Button */}
          <Button
            onClick={handleAddEvent}
            className="mt-2"
            disabled={
              !newEvent.title ||
              !newEvent.start ||
              !newEvent.end ||
              !newEvent.theme
            } // Disable if any field is empty
          >
            Add Event
          </Button>
        </div>
      )}

      {currentUser.isAdmin && events.length > 0 ? (
        <>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>Date</Table.HeadCell>
              <Table.HeadCell>Event Title</Table.HeadCell>
              <Table.HeadCell>Event Theme</Table.HeadCell>
              <Table.HeadCell>Start Time</Table.HeadCell>
              <Table.HeadCell>End Time</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>Edit</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {filteredEvents.map((event) => (
                <Table.Row className="bg-white" key={event.id}>
                  <Table.Cell>
                    {new Date(event.start).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>{event.title}</Table.Cell>
                  <Table.Cell>{event.theme}</Table.Cell>
                  <Table.Cell>
                    {new Date(event.start).toLocaleTimeString()}
                  </Table.Cell>
                  <Table.Cell>
                    {new Date(event.end).toLocaleTimeString()}
                  </Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setEventIdToDelete(event.id);
                      }}
                      className="font-medium text-red-500 hover:underline cursor-pointer"
                    >
                      Delete
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => handleEditEvent(event)}
                      className="text-teal-500 hover:underline cursor-pointer"
                    >
                      Edit
                    </span>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className="w-full text-teal-500 self-center text-sm py-7"
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p>You have no events yet!</p>
      )}

      {/* Confirmation Modal for Deletion */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>
          <span className="text-md font-bold">Are you sure?</span>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col items-center justify-center gap-4">
            <HiOutlineExclamationCircle className="text-red-500 w-14 h-14" />
            <h3 className="font-normal text-gray-500">
              Are you sure you want to delete this event?
            </h3>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="failure" onClick={handleDeleteEvent}>
            Yes, I'm sure
          </Button>
          <Button color="gray" onClick={() => setShowModal(false)}>
            No, cancel
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Event Modal */}
      <Modal show={showEditModal} onClose={() => setShowEditModal(false)}>
        <Modal.Header>
          <span className="text-md font-bold">Edit Event</span>
        </Modal.Header>
        <Modal.Body>
          <TextInput
            label="Event Title"
            placeholder="Event Title"
            value={eventToEdit.title}
            onChange={(e) =>
              setEventToEdit({ ...eventToEdit, title: e.target.value })
            }
            className="mr-2 p-2 border border-gray-300 rounded"
          />
          <TextInput
            label="Event Theme"
            value={eventToEdit.theme}
            onChange={(e) =>
              setEventToEdit({ ...eventToEdit, theme: e.target.value })
            }
            className="mr-2 p-2 border border-gray-300 rounded"
          />
          <TextInput
            label="Start Date"
            type="datetime-local"
            value={eventToEdit.start}
            onChange={(e) =>
              setEventToEdit({ ...eventToEdit, start: e.target.value })
            }
            className="mr-2 p-2 border border-gray-300 rounded"
          />
          <TextInput
            label="End Date"
            type="datetime-local"
            value={eventToEdit.end}
            onChange={(e) =>
              setEventToEdit({ ...eventToEdit, end: e.target.value })
            }
            className="mr-2 p-2 border border-gray-300 rounded"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleUpdateEvent}>Save Changes</Button>
          <Button color="gray" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
