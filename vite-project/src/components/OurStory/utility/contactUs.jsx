import { useState } from "react";

export const ContactUsModal = () => {
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
        <form className="contact-us-form flex flex-col gap-2 h-full" onSubmit={handleSubmit}>
            <input
                className="bg-white h-9"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                className="bg-white h-9"
                type="text"
                placeholder="Email or Phone"
                value={emailOrPhone}
                onChange={handleEmailOrPhone}
                required
            />
            {isValid ? null : <div style={{ color: 'red' }}>Invalid Input</div>}
            <textarea
                className="bg-white h-full"
                type="text"
                placeholder="Message"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button className="" type="submit">Send</button>
        </form>    
    )
}
