import { Modal, Table, Button, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import axios from "axios";

export default function DashEvents() {
  const { currentUser } = useSelector((state) => state.user);
  const [events, setEvents] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [eventIdToDelete, setEventIdToDelete] = useState("");
  const [eventToEdit, setEventToEdit] = useState({
    _id: "", // Make sure the event has the _id field
    event_title: "",
    event_theme: "",
    event_date: "",
  });

  // Filter state
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

  // Show more events
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

  // Delete event
  const handleDeleteEvent = async () => {
    setShowModal(false);
    try {
      const res = await axios.delete(`/api/calendar/events/${eventIdToDelete}`);
      if (res.status === 200) {
        setEvents((prev) =>
          prev.filter((event) => event._id !== eventIdToDelete)
        );
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  // Handle filter input changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Filter events based on title, theme, and date
  const filteredEvents = (events || []).filter((event) => {
    const titleMatch = event.event_title
      .toLowerCase()
      .includes(filters.title.toLowerCase());
    const themeMatch = event.event_theme
      .toLowerCase()
      .includes(filters.theme.toLowerCase());
    const dateMatch = filters.date
      ? new Date(event.event_date).toLocaleDateString() ===
        new Date(filters.date).toLocaleDateString()
      : true;

    return titleMatch && themeMatch && dateMatch;
  });

  // Open Edit Modal with event data
  const handleEditEvent = (event) => {
    setEventToEdit({
      _id: event._id, // Ensure _id is passed here
      event_title: event.event_title,
      event_theme: event.event_theme,
      event_date: event.event_date,
    });
    setShowEditModal(true);
  };

  // Handle event update
  const handleUpdateEvent = async () => {
    try {
      const res = await axios.put(
        `/api/calendar/events/${eventToEdit._id}`,
        eventToEdit
      );
      if (res.status === 200) {
        setEvents((prev) =>
          prev.map((event) =>
            event._id === eventToEdit._id ? res.data : event
          )
        );
        setShowEditModal(false);
      }
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      {currentUser.isAdmin && events.length > 0 ? (
        <>
          <div className="mb-4">
            <input
              type="text"
              name="title"
              placeholder="Filter by title"
              value={filters.title}
              onChange={handleFilterChange}
              className="mr-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="theme"
              placeholder="Filter by theme"
              value={filters.theme}
              onChange={handleFilterChange}
              className="mr-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="date"
              name="date"
              value={filters.date}
              onChange={handleFilterChange}
              className="mr-2 p-2 border border-gray-300 rounded"
            />
          </div>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>Date</Table.HeadCell>
              <Table.HeadCell>Event Title</Table.HeadCell>
              <Table.HeadCell>Event Theme</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>Edit</Table.HeadCell>
            </Table.Head>
            {filteredEvents.map((event) => (
              <Table.Body className="divide-y" key={event._id}>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>
                    {new Date(event.event_date).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>{event.event_title}</Table.Cell>
                  <Table.Cell>{event.event_theme}</Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setEventIdToDelete(event._id);
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
              </Table.Body>
            ))}
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

      {/* Confirmation Modal for Deleting Event */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this event?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteEvent}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Edit Event Modal */}
      <Modal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        popup
        size="md"
      >
        <Modal.Header>Edit Event</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <TextInput
              label="Event Title"
              value={eventToEdit.event_title}
              onChange={(e) =>
                setEventToEdit({ ...eventToEdit, event_title: e.target.value })
              }
            />
            <TextInput
              label="Event Theme"
              value={eventToEdit.event_theme}
              onChange={(e) =>
                setEventToEdit({ ...eventToEdit, event_theme: e.target.value })
              }
            />
            <TextInput
              label="Event Date"
              type="date"
              value={eventToEdit.event_date}
              onChange={(e) =>
                setEventToEdit({ ...eventToEdit, event_date: e.target.value })
              }
            />
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <Button color="success" onClick={handleUpdateEvent}>
              Update Event
            </Button>
            <Button color="gray" onClick={() => setShowEditModal(false)}>
              Cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
