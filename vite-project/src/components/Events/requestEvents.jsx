import { useState } from "react"

export const RequestEventModal = () => {
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [description, setDescription] = useState('');

    const [isValid, setIsValid] = useState(true);

    const handleEmailOrPhone = (e) => {
        const value = e.target.value;
        setEmailOrPhone(value);
        validateEmailOrPhone(value);
    }

    const validateEmailOrPhone = (inputValue) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const phoneRegex = /^[0-9]{10}$/;

        if (emailRegex.test(inputValue) || phoneRegex.test(inputValue)) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValid) {
            console.log("Input is Valid: ", emailOrPhone)
        } else {
            console.log("Input is not Valid: ", emailOrPhone)
        }
    }

    return (
        <div className="event-request-container">
            <div className='event-bar event-green-bar'></div>
            <form className="form-request-event-container event-container" onSubmit={handleSubmit}>
                <div className="form-start-and-end">
                    <div className="form-start">
                        <label htmlFor="item-start">Start</label>
                        <input
                            className="form-inputs"
                            id="item-start"
                            type="datetime-local"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-end">
                        <label htmlFor="item-end">End</label>
                        <input
                            className="form-inputs"
                            id="item-end"
                            type="datetime-local"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-email-phone">
                    <label htmlFor="item-email-phone">Email or Phone</label>
                    <input
                        className="form-inputs"
                        id="item-email-phone"
                        type="text"
                        value={emailOrPhone}
                        onChange={handleEmailOrPhone}
                        required
                    />
                </div>
                <div className="form-description">
                    <label htmlFor="item-description">Description</label>
                    <textarea
                        className="form-inputs"
                        id="item-description"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
            </form>
            <button className="green-btn" type="submit">Submit</button>
            {isValid ? null : <div style={{ color: 'red' }}>Invalid Input</div>}
        </div>
    )
}
