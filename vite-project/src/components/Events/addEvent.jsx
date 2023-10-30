import { useState } from "react";

export function AddEvent() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [color, setColor] = useState("");
  const [allDay, setAllDay] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title,
      details,
      startDate,
      endDate,
      startTime,
      endTime,
      color,
    };
    console.log(event);
  };

  return (
    <div className="w-full max-w-lg m-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col m-auto space-y-6 mb-4 "
      >
        <div className="flex flex-col space-y-3">
          <label htmlFor="event-title">Event Title:</label>
          <input
            className="bg-gray-100 rounded text-center h-10 txt-lg"
            id="event-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title must be between 3 and 100 charaters"
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
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        {!allDay && (
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
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>
        )}
        <div className="flex space-x-3">
          <label htmlFor="all-day">All Day:</label>
          <input
            className=""
            id="all-day"
            type="checkbox"
            value={allDay}
            onChange={() => setAllDay(!allDay)}
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="color">Choose Color:</label>
          <input
            className="bg-gray-100 rounded text-center h-10 txt-lg"
            id="color"
            type="select"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </div>
        <button>Submit Event</button>
      </form>
    </div>
  );
}
