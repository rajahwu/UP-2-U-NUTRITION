import { useEffect, useState } from "react";
import './YourStory.css'

const YourStory = () => {
    const [name, setName] = useState('');
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
        <div className="your-story-container">
            <div className='headers form-titles bg-titles-blue'>COACHING</div>
            <div className="coaching-container">
                <div className='coaching-bar coaching-yellow-bar'></div>
                <div className="coaching-form-btn">
                    <form
                        className="form-coaching-container"
                        onSubmit={handleSubmit}
                    >
                        <div className="form-coaching-name">
                            <label htmlFor="item-name">Name</label>
                            <input
                                className="form-inputs"
                                id="item-name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
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
                        {isValid ? null : <div style={{ color: 'red' }}>Invalid Input</div>}
                        <div className="form-description">
                            <label htmlFor="item-description">Description</label>
                            <textarea
                                className="form-inputs h-full"
                                id="item-description"
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>
                    </form>
                    <div className="coaching-btns-container">
                        <button className="red-btn coaching-btn" type="submit">Cancel</button>
                        <button className="green-btn coaching-btn" type="submit">Send</button>
                    </div>
                </div>
            </div >
            <div >
                <img className="yourstory-page-bg-img" src='/images/BG_Tree.png' alt='' />
            </div>
        </div >
    )
}


export default YourStory
