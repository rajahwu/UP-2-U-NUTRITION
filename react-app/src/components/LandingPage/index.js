import { useEffect, useState } from "react";
import './LandingPage.css'


const LandingPage = () => {

    return (
        <div className="landing-page" style={{ backgroundImage: 'url(https://i.imgur.com/VyZicmD.jpg)', height: '100vh' }}>
            <div className="landing-page-content">
                <div className="orange-line-order">
                    <div className="red-line-order">
                        <div className="green-line-order">
                            <div className="start-order">
                                <h4>Don't forget to try our delicious Strawberry Cheesecake Supah Shake</h4>
                                <button className="landing-page-button">Start your order</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}



export default LandingPage
