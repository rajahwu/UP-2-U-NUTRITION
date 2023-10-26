const months = {
    'Jan': 'January',
    'Feb': 'February',
    'Mar': 'March',
    'Apr': 'April',
    'May': 'May',
    'Jun': 'June',
    'Jul': 'July',
    'Aug': 'August',
    'Sep': 'September',
    'Oct': 'October',
    'Nov': 'November',
    'Dec': 'December'
}
export const EventsModal = ({ event }) => {
    const dateOfEventArr = event.date.split(' ');
    const monthOfEvent = months[dateOfEventArr[2]];
    const dayOfEvent = dateOfEventArr[1];

    const startTime = event.start_time.split(' ')[4]
    const endTime = event.end_time.split(' ')[4]

    const startTimeForDisplay = startTime[0] == 0 ?
        startTime.slice(1, 5) : startTime.slice(0, 5)

    const endTimeForDisplay = endTime[0] == 0 ?
        endTime.slice(1, 5) : endTime.slice(0, 5)

    console.log(event)
    return (
        <div className="event-container">
            <div className='event-color-bar' style={{ backgroundColor: `${event.color}` }}></div>
            <div className="event-month-day">
                {`${monthOfEvent} ${dayOfEvent}`}
            </div>
            <div className="event-hours">
                {`${startTimeForDisplay} - ${endTimeForDisplay}`}
            </div>
            <div className="divider"></div>
            <div className="event-title">{event.title}</div>
            <div className="divider"></div>
            <div className="event-details">{event.details}</div>
        </div>
    )
}
