import { useState } from "react";

export function AddEvent() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [color, setColor] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title,
      details,
      startDate,
      endDate,
      startTime,
      endTime,
      color
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
          <label htmlFor="event-title">Start Date:</label>
          <input
            className="bg-gray-100 rounded text-center h-10 txt-lg"
            id="event-title"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        {/* {startDate &&

        } */}


        <button>Submit Event</button>
      </form>
    </div>
  );
}
