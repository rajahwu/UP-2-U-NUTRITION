
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export const RequestEventModal = () => {
    const [name, setName] = useState('');
    const [eventTitle, setEventTitle] = useState('')
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [description, setDescription] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [state, handleSubmit] = useForm('mknlylwj');
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const todayString = new Date().toISOString().slice(0,16);



    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const phoneRegex = /^[0-9]{10}$/;

    if (state.succeeded) {
        window.alert('Message sent!')
    }

    const handleEmailOrPhone = (e) => {
        const value = e.target.value;
        setEmailOrPhone(value);
        validateEmailOrPhone(value);
    }

    const validateEmailOrPhone = (inputValue) => {
        if (emailRegex.test(inputValue) || phoneRegex.test(inputValue)) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const messageDetails = `RequesterName: ${name}, RequestedEventTitle: ${eventTitle}, RequestedEventStartTime: ${startTime}, RequestedEventEndTime: ${endTime}, RequestedEventDescription${description}`

        console.log(emailOrPhone)
        if (phoneRegex.test(emailOrPhone)) {

            let number = emailOrPhone.replace(/[^\w\s]/gi, "").replace(/ /g, "");

            let url = `https://web.whatsapp.com/send?phone=1${number}`;

            url += `&text=${encodeURI(messageDetails)}&app_absent=0`;

            console.log(url)

            window.open(url)
        }
    };

  return (
    <div className=" w-full m-auto px-8">
      <div className="event-bar event-green-bar h -mx-10"></div>
      <div className="headers form-titles p-3">REQUEST EVENT</div>
      <div className="divider"></div>
      <div className="request-event-form-btn w-full flex flex-col p-8">
        <form
          className="pt-8 flex flex-col space-y-10 w-5/6 "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col space-y-3" >
      <label htmlFor="event-title">Event Title:</label>
      <input
      className="bg-gray-100 rounded text-center txt-lg h-10"
      id="event-title"
      type="text"
      value={eventTitle}
      onChange={(e) => setEventTitle(e.target.value)}
      placeholder="Title must be between 3 and 100 charaters"
      minLength="3"
      maxLength="100"
      required
      />
      </div>
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="item-start"
              >
                Requested Start:
              </label>
              <input
                className="bg-gray-100 rounded text-center h-10 txt-lg p-4"
                id="item-start"
                type="datetime-local"
                min={todayString}
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="item-end">
                Requested End:
              </label>
              <input
                className="bg-gray-100 rounded text-center h-10 txt-lg p-4"
                id="item-end"
                type="datetime-local"
                min={startTime || todayString}
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
              />
            </div>

          {isValid ? null : <div style={{ color: "red" }}>Invalid Input</div>}

          <div className="flex flex-col space-y-3 place-content-center">
            <label htmlFor="item-description" className="pt-3 pl-1">
              Description:
            </label>
            <textarea
              className="bg-gray-100 rounded  h-[30vh] txt-lg resize-none p-3"
              id="item-description"
              type="text"
              value={description}
              maxLength="300"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label htmlFor="item-email-phone">
              Email/Phone:
            </label>
            <input
              className="bg-gray-100 rounded text-center h-10 txt-lg p-4"
              id="item-email-phone"
              type="text"
              value={emailOrPhone}
              onChange={handleEmailOrPhone}
              required
            />
          </div>
          <div className="flex flex-col space-y-3">
      <label htmlFor="event-title">Name:</label>
      <input
      className="bg-gray-100 rounded text-center h-10 txt-lg"
      id="event-title"
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Please Enter Your Name"
      minLength="3"
      maxLength="50"
      required
      />
      </div>
          <div className="request-event-btn-container">
            <button className="green-btn request-event-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
