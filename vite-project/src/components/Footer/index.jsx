import { ContactUsModal } from "../OurStory/utility/contactUs";
import Map from "../util/GoogleMap";
import './Footer.css'


const Footer = () => {    
     
    return (
        <div className="footer">
            <div className="red-line-border">
                <div className="green-line-border">
                    <div className="blue-line-border">
                        <div className="footer-container">
                            <div className="business-hours-containter w-1/4 border-2 border-black p-1 flex flex-col items-center">
                                <h1 className="text-center">Business Hours </h1>
                                <div className="flex gap-6">
                                    <div>
                                        <h2 className="text-right">Monday</h2>
                                        <h2 className="text-right">Tuesday</h2>
                                        <h2 className="text-right">Wednesday</h2>
                                        <h2 className="text-right">Friday </h2>
                                        <h2 className="text-right">Saturday</h2>
                                        <h2 className="text-right">Sunday</h2>
                                    </div>
                                    <div>
                                        <h2 className="text-left">7:30AM - 8PM</h2>
                                        <h2 className="text-left">7:30AM - 8PM</h2>
                                        <h2 className="text-left">7:30AM - 8PM</h2>
                                        <h2 className="text-left">7:30AM - 8PM</h2>
                                        <h2 className="text-left">9:00AM - 3PM</h2>
                                        <h2 className="text-left">9:00AM - 3PM</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-form-containter w-1/4 border-2 border-black p-1 flex flex-col items-center">
                                <h1 className="text-center">Contact Us</h1>
                                <ContactUsModal />
                            </div>
                            <div className="information-container w-1/4 border-2 border-black p-1 flex flex-col items-center">
                                <h1 className="text-center">Address</h1>
                                <h2>1517 NW 23rd Ave, Gainesville, FL 32605</h2>
                                <h1>Follow and Support</h1>
                                <img />
                                <img />
                                <img />
                                <img />
                                <img />
                                <img />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
