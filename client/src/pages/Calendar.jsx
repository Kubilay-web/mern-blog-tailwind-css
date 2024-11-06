// import React, { useState, useEffect } from "react";

// const MONTH_NAMES = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// const Calendar = () => {
//   const [month, setMonth] = useState(new Date().getMonth());
//   const [year, setYear] = useState(new Date().getFullYear());
//   const [noOfDays, setNoOfDays] = useState([]);
//   const [blankDays, setBlankDays] = useState([]);
//   const [events, setEvents] = useState([
//     {
//       event_date: new Date(2020, 3, 1),
//       event_title: "April Fool's Day",
//       event_theme: "blue",
//     },
//     {
//       event_date: new Date(2020, 3, 10),
//       event_title: "Birthday",
//       event_theme: "red",
//     },
//     {
//       event_date: new Date(2020, 3, 16),
//       event_title: "Upcoming Event",
//       event_theme: "green",
//     },
//   ]);

//   const [eventTitle, setEventTitle] = useState("");
//   const [eventDate, setEventDate] = useState("");
//   const [eventTheme, setEventTheme] = useState("blue");
//   const [openEventModal, setOpenEventModal] = useState(false);

//   useEffect(() => {
//     getNoOfDays();
//   }, [month, year]);

//   const isToday = (date) => {
//     const today = new Date();
//     const d = new Date(year, month, date);
//     return today.toDateString() === d.toDateString();
//   };

//   const showEventModal = (date) => {
//     setOpenEventModal(true);
//     setEventDate(new Date(year, month, date).toDateString());
//   };

//   const addEvent = () => {
//     if (eventTitle === "") return;
//     setEvents([
//       ...events,
//       {
//         event_date: eventDate,
//         event_title: eventTitle,
//         event_theme: eventTheme,
//       },
//     ]);
//     // Clear form data
//     setEventTitle("");
//     setEventDate("");
//     setEventTheme("blue");
//     // Close modal
//     setOpenEventModal(false);
//   };

//   const getNoOfDays = () => {
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
//     const dayOfWeek = new Date(year, month).getDay();
//     const blankdaysArray = Array.from({ length: dayOfWeek }, (_, i) => i + 1);
//     const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
//     setBlankDays(blankdaysArray);
//     setNoOfDays(daysArray);
//   };

//   return (
//     <div className="container mx-auto px-4 py-2 md:py-24">
//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <div className="flex items-center justify-between py-2 px-6">
//           <div>
//             <span className="text-lg font-bold text-gray-800">
//               {MONTH_NAMES[month]}
//             </span>
//             <span className="ml-1 text-lg text-gray-600 font-normal">
//               {year}
//             </span>
//           </div>
//           <div className="border rounded-lg px-1" style={{ paddingTop: "2px" }}>
//             <button
//               type="button"
//               className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center"
//               disabled={month === 0}
//               onClick={() => {
//                 setMonth(month - 1);
//               }}
//             >
//               <svg
//                 className="h-6 w-6 text-gray-500 inline-flex leading-none"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M15 19l-7-7 7-7"
//                 />
//               </svg>
//             </button>
//             <div className="border-r inline-flex h-6"></div>
//             <button
//               type="button"
//               className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1"
//               disabled={month === 11}
//               onClick={() => {
//                 setMonth(month + 1);
//               }}
//             >
//               <svg
//                 className="h-6 w-6 text-gray-500 inline-flex leading-none"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//         <div className="-mx-1 -mb-1">
//           <div className="flex flex-wrap" style={{ marginBottom: "-40px" }}>
//             {DAYS.map((day, index) => (
//               <div
//                 key={index}
//                 style={{ width: "14.26%" }}
//                 className="px-2 py-2"
//               >
//                 <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">
//                   {day}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex flex-wrap border-t border-l">
//             {blankDays.map((_, index) => (
//               <div
//                 key={index}
//                 style={{ width: "14.28%", height: "120px" }}
//                 className="text-center border-r border-b px-4 pt-2"
//               ></div>
//             ))}
//             {noOfDays.map((date, dateIndex) => (
//               <div
//                 key={dateIndex}
//                 style={{ width: "14.28%", height: "120px" }}
//                 className="px-4 pt-2 border-r border-b relative"
//               >
//                 <div
//                   onClick={() => showEventModal(date)}
//                   className={`inline-flex w-6 h-6 items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100 ${
//                     isToday(date)
//                       ? "bg-blue-500 text-white"
//                       : "text-gray-700 hover:bg-blue-200"
//                   }`}
//                 >
//                   {date}
//                 </div>
//                 <div
//                   style={{ height: "80px" }}
//                   className="overflow-y-auto mt-1"
//                 >
//                   {events
//                     .filter(
//                       (e) =>
//                         new Date(e.event_date).toDateString() ===
//                         new Date(year, month, date).toDateString()
//                     )
//                     .map((event, index) => (
//                       <div
//                         key={index}
//                         className={`px-2 py-1 rounded-lg mt-1 overflow-hidden border ${
//                           event.event_theme === "blue"
//                             ? "border-blue-200 text-blue-800 bg-blue-100"
//                             : event.event_theme === "red"
//                             ? "border-red-200 text-red-800 bg-red-100"
//                             : event.event_theme === "yellow"
//                             ? "border-yellow-200 text-yellow-800 bg-yellow-100"
//                             : event.event_theme === "green"
//                             ? "border-green-200 text-green-800 bg-green-100"
//                             : "border-purple-200 text-purple-800 bg-purple-100"
//                         }`}
//                       >
//                         <p className="text-sm truncate leading-tight">
//                           {event.event_title}
//                         </p>
//                       </div>
//                     ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {openEventModal && (
//         <div
//           style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
//           className="fixed z-40 top-0 right-0 left-0 bottom-0 h-full w-full"
//         >
//           <div className="p-4 max-w-xl mx-auto relative absolute left-0 right-0 overflow-hidden mt-24">
//             <div
//               className="shadow absolute right-0 top-0 w-10 h-10 rounded-full bg-white text-gray-500 hover:text-gray-800 inline-flex items-center justify-center cursor-pointer"
//               onClick={() => setOpenEventModal(false)}
//             >
//               <svg
//                 className="fill-current w-6 h-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
//               </svg>
//             </div>

//             <div className="shadow w-full rounded-lg bg-white overflow-hidden block p-8">
//               <h2 className="font-bold text-2xl mb-6 text-gray-800 border-b pb-2">
//                 Add Event Details
//               </h2>
//               <div className="flex flex-col mb-4">
//                 <label className="font-semibold text-gray-600 mb-2">Date</label>
//                 <span className="text-gray-800">{eventDate}</span>
//               </div>
//               <div className="flex flex-col mb-4">
//                 <label className="font-semibold text-gray-600 mb-2">
//                   Title
//                 </label>
//                 <input
//                   type="text"
//                   className="border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
//                   value={eventTitle}
//                   onChange={(e) => setEventTitle(e.target.value)}
//                 />
//               </div>
//               <div className="flex flex-col mb-4">
//                 <label className="font-semibold text-gray-600 mb-2">
//                   Theme
//                 </label>
//                 <select
//                   className="border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
//                   value={eventTheme}
//                   onChange={(e) => setEventTheme(e.target.value)}
//                 >
//                   <option value="blue">Blue</option>
//                   <option value="red">Red</option>
//                   <option value="green">Green</option>
//                   <option value="yellow">Yellow</option>
//                   <option value="purple">Purple</option>
//                 </select>
//               </div>
//               <button
//                 type="button"
//                 className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//                 onClick={addEvent}
//               >
//                 Save Event
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Calendar;

import React, { useState, useEffect } from "react";

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [noOfDays, setNoOfDays] = useState([]);
  const [blankDays, setBlankDays] = useState([]);
  const [events, setEvents] = useState([
    {
      event_date: new Date(2020, 3, 1),
      event_title: "April Fool's Day",
      event_theme: "blue",
    },
    {
      event_date: new Date(2020, 3, 10),
      event_title: "Birthday",
      event_theme: "red",
    },
    {
      event_date: new Date(2020, 3, 16),
      event_title: "Upcoming Event",
      event_theme: "green",
    },
  ]);

  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTheme, setEventTheme] = useState("blue");
  const [openEventModal, setOpenEventModal] = useState(false);
  const [hoveredEvent, setHoveredEvent] = useState(null); // Hovered event state

  useEffect(() => {
    getNoOfDays();
  }, [month, year]);

  const isToday = (date) => {
    const today = new Date();
    const d = new Date(year, month, date);
    return today.toDateString() === d.toDateString();
  };

  const showEventModal = (date) => {
    setOpenEventModal(true);
    setEventDate(new Date(year, month, date).toDateString());
  };

  const addEvent = () => {
    if (eventTitle === "") return;
    setEvents([
      ...events,
      {
        event_date: eventDate,
        event_title: eventTitle,
        event_theme: eventTheme,
      },
    ]);
    setEventTitle("");
    setEventDate("");
    setEventTheme("blue");
    setOpenEventModal(false);
  };

  const getNoOfDays = () => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dayOfWeek = new Date(year, month).getDay();
    const blankdaysArray = Array.from({ length: dayOfWeek }, (_, i) => i + 1);
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    setBlankDays(blankdaysArray);
    setNoOfDays(daysArray);
  };

  return (
    <div className="container mx-auto px-4 py-2 md:py-24">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="flex items-center justify-between py-2 px-6">
          <div>
            <span className="text-lg font-bold text-gray-800">
              {MONTH_NAMES[month]}
            </span>
            <span className="ml-1 text-lg text-gray-600 font-normal">
              {year}
            </span>
          </div>
          <div className="border rounded-lg px-1" style={{ paddingTop: "2px" }}>
            <button
              type="button"
              className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center"
              disabled={month === 0}
              onClick={() => {
                setMonth(month - 1);
              }}
            >
              <svg
                className="h-6 w-6 text-gray-500 inline-flex leading-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="border-r inline-flex h-6"></div>
            <button
              type="button"
              className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1"
              disabled={month === 11}
              onClick={() => {
                setMonth(month + 1);
              }}
            >
              <svg
                className="h-6 w-6 text-gray-500 inline-flex leading-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="-mx-1 -mb-1">
          <div className="flex flex-wrap" style={{ marginBottom: "-40px" }}>
            {DAYS.map((day, index) => (
              <div
                key={index}
                style={{ width: "14.26%" }}
                className="px-2 py-2"
              >
                <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">
                  {day}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap border-t border-l">
            {blankDays.map((_, index) => (
              <div
                key={index}
                style={{ width: "14.28%", height: "120px" }}
                className="text-center border-r border-b px-4 pt-2"
              ></div>
            ))}
            {noOfDays.map((date, dateIndex) => (
              <div
                key={dateIndex}
                style={{ width: "14.28%", height: "120px" }}
                className="px-4 pt-2 border-r border-b relative"
              >
                <div
                  onClick={() => showEventModal(date)}
                  className={`inline-flex w-6 h-6 items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100 ${
                    isToday(date)
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-blue-200"
                  }`}
                >
                  {date}
                </div>
                <div
                  style={{ height: "80px" }}
                  className="overflow-y-auto mt-1"
                >
                  {events
                    .filter(
                      (e) =>
                        new Date(e.event_date).toDateString() ===
                        new Date(year, month, date).toDateString()
                    )
                    .map((event, index) => (
                      <div
                        key={index}
                        onMouseEnter={() => setHoveredEvent(event)} // Show hover modal
                        onMouseLeave={() => setHoveredEvent(null)} // Hide hover modal
                        className={`px-2 py-1 rounded-lg mt-1 overflow-hidden border ${
                          event.event_theme === "blue"
                            ? "border-blue-200 text-blue-800 bg-blue-100"
                            : event.event_theme === "red"
                            ? "border-red-200 text-red-800 bg-red-100"
                            : event.event_theme === "yellow"
                            ? "border-yellow-200 text-yellow-800 bg-yellow-100"
                            : event.event_theme === "green"
                            ? "border-green-200 text-green-800 bg-green-100"
                            : "border-purple-200 text-purple-800 bg-purple-100"
                        }`}
                      >
                        <p className="text-sm truncate leading-tight">
                          {event.event_title}
                        </p>

                        {/* Hovered Event Modal */}
                        {hoveredEvent === event && (
                          <div
                            className="absolute bg-white border rounded-lg shadow-lg p-4 z-50"
                            style={{
                              top: "100%",
                              left: "50%",
                              transform: "translate(-50%, 10px)",
                              width: "100%", // %100 genişlik yapıyoruz, ardından max-width ile sınırlıyoruz
                              maxWidth: "300px", // Modalın maksimum genişliği
                              maxHeight: "200px", // Maksimum yükseklik
                              overflowY: "auto", // Uzun içerikler için kaydırma
                            }}
                          >
                            <p
                              className="font-bold"
                              style={{
                                overflowWrap: "break-word",
                                whiteSpace: "normal",
                              }}
                            >
                              {event.event_title}
                            </p>
                            <p>{new Date(event.event_date).toDateString()}</p>
                            <p className="text-sm text-gray-600">
                              Event Theme: {event.event_theme}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {openEventModal && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              onClick={() => setOpenEventModal(false)}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Add Event
                    </h3>
                    <div className="mt-2">
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        placeholder="Event Title"
                        value={eventTitle}
                        onChange={(e) => setEventTitle(e.target.value)}
                      />
                      <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-2"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                      />
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-2"
                        value={eventTheme}
                        onChange={(e) => setEventTheme(e.target.value)}
                      >
                        <option value="blue">Blue</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="yellow">Yellow</option>
                        <option value="purple">Purple</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={addEvent}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={() => setOpenEventModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
