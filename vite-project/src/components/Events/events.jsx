import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"
import { useModal } from "../../context/Modal";

export const EventsModal = ({ event }) => {
    console.log("End date:", event);
    const user = useSelector(state => state.session.user)
    const navigate = useNavigate();
    const { closeModal } = useModal();
    const displayDate = (eventDates) => {
        console.log("eventDates", eventDates);
        if (eventDates) {
            const month = eventDates.toLocaleString('default', { month: 'long' });
            const day = eventDates.getDate();
            return `${month} ${day}`;
        }
        return "";
    }

    const handleClick = () => {
        closeModal();
        navigate(`events/edit/${event.id}`, {state: event});
    }

    // Create Date objects from the start_time and end_time strings
    const startTime = new Date(event.start_time);
    const endTime = new Date(event.end_time);

    // Format the times in "h:mm a" (hours:minutes AM/PM) format
    const startTimeFormatted = startTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    const endTimeFormatted = endTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

    return (
        <div className="event-container">
            <div className='event-bar' style={{ backgroundColor: `${event.color}` }}></div>
            <div className="flex">
                <div className="event-month-day">{displayDate(new Date(event.start_date))}</div>
                {event.end_date ? (
                    <div className="event-month-day"> - {displayDate(new Date(event.end_date))}</div>
                ) : null}
            </div>
            <div className="event-hours">
                {`${startTimeFormatted} - ${endTimeFormatted}`}
            </div>
            <div className="divider"></div>
            <div className="event-title">{event.title}</div>
            <div className="divider"></div>
            <div className="event-details">{event.details}</div>
            <div>For more information, contact us at +1 (786) 651-1153 or up2unutrition.gnv@gmail.com.</div>
            {user ? (<button onClick={handleClick} className="text-2xl hover:underline hover:text-blue-900">[Edit Event]</button>
            ):(null)}
        </div>
    )
}
