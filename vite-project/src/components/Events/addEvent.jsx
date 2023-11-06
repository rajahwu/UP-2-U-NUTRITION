import { useState, useEffect } from "react";
import {
  createEventThunk,
  deleteEventThunk,
  editEventThunk,
} from "../../store/events";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export function AddEvent() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.session.user);

  // Get today's date formatted "YYYY-MM-DD"
  const todayString = new Date().toISOString().slice(0, 10);
  const parseDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().slice(0, 10); // "YYYY-MM-DD" format
  };

  const parseTime = (timeString) => {
    const date = new Date(timeString);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`; // "HH:MM" format
  };

  // Extract the event object from the location state
  const event = location.state;

  // Define state variables with initial values based on the event or empty string
  const [title, setTitle] = useState(event ? event.title : "");
  const [details, setDetails] = useState(event ? event.details : "");
  const [startDate, setStartDate] = useState(
    event ? parseDate(event.start_date) : todayString
  );
  const [endDate, setEndDate] = useState(event ? parseDate(event.end_date) : "");
  const [startTime, setStartTime] = useState(
    event ? parseTime(event.start_date) : ""
  );
  const [endTime, setEndTime] = useState(event ? parseTime(event.end_date) : "");
  const [color, setColor] = useState(event ? event.color : "");
  const [errors, setErrors] = useState({});


  console.log("========== start", event)

  // Handle the case where event is initially null
  useEffect(() => {
    if (!event) {
      setEndDate(todayString);
    }
  }, [event]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let err = {};

    // Compare the Date objects
    if (endTime <= startTime) {
      err.endTime = "End time cannot be before or equal to start time";
    }

    setErrors(err);

    // Build the correct data shape
    const eventToSend = {
      title,
      details,
      startDate,
      endDate,
      startTime,
      endTime,
      color,
    };

    // Check if we should edit an existing event or create a new one
    if (event) {
      eventToSend.id = event.id;
      dispatch(editEventThunk(eventToSend));
      navigate("/events");
    } else {
      const data = dispatch(createEventThunk(eventToSend));
      if (data.errors) {
      } else {
        navigate("/events");
      }
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this event?")) {
      dispatch(deleteEventThunk(event.id));
      navigate("/events");
    }
  };

  return (
    <>
      {user && user.admin ? (
        <div className="w-full max-w-lg m-auto">
          <form
            onSubmit={handleSubmit}
            className="mt-20 bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col m-auto space-y-6 mb-4"
          >
            <div className="flex flex-col space-y-3">
              <label htmlFor="event-title">Event Title:</label>
              <input
                className="bg-gray-100 rounded text-center h-10 txt-lg"
                id="event-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title must be between 3 and 100 characters"
                minLength="3"
                maxLength="100"
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="start-date">Start Date:</label>
              <input
                className="bg-gray-100 rounded text-center h-10 txt-lg"
                id="start-date"
                type="date"
                min={todayString}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="end-date">End Date:</label>
              <input
                className="bg-gray-100 rounded text-center h-10 txt-lg"
                id="end-date"
                type="date"
                min={startDate || todayString}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <p>{errors.endTime}</p>
            <div className="flex place-content-between">
              <div>
                <label htmlFor="startTime">Start Time:</label>
                <input
                  id="startTime"
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="endTime">End Time:</label>
                <input
                  id="endTime"
                  type="time"
                  min={startTime}
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <label htmlFor="color">Choose Color:</label>
              <select
                className={`bg-[${color}] rounded text-center h-10 txt-lg`}
                id="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
              >
                <option value="" disabled hidden>
                  Choose a Color
                </option>
                <option value="#d98c00">Orange</option>
                <option value="#d52540">Red</option>
                <option value="#5eac00">Green</option>
                <option value="#0093d3">Blue</option>
              </select>
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="event-details">Event Details:</label>
              <textarea
                className="bg-gray-100 rounded h-100 txt-lg resize-none p-2"
                id="event-details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Enter event details here"
              />
            </div>
            <button className="green-btn">Submit Event</button>
            {event && (
              <button className="red-btn" onClick={handleDelete}>
                Delete Event
              </button>
            )}
          </form>
        </div>
      ) : (
        <div>
          <div onClick={() => navigate("/events")} disabled={Object.keys(errors).length > 0}>
            Click here to return to events
          </div>
        </div>
      )}
    </>
  );
}
