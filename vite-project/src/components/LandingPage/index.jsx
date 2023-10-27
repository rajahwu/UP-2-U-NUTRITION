import { randomElement } from '../util'

import './LandingPage.css'

const LandingPage = () => {

    const dailySpecials = [
        'Monday Special',
        'Tuesday Special',
        'Wednesday Special',
        'Thursday Special',
        'Friday Special',
        'Saturday Special',
        'Sunday Special'
    ]

    return (
        <div className="landing-page" style={{ backgroundImage: 'url(https://i.imgur.com/VyZicmD.jpg)', height: '100vh' }}>
            <div className="landing-page-content">
                <div className="orange-line-order">
                    <div className="red-line-order">
                        <div className="green-line-order">
                            <div className="start-order">
                                <div className='daily-specials'>{`${randomElement(dailySpecials)}`}</div>
                                <button onClick={() => history.push("/menu")} className="landing-page-button">START YOUR ORDER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default LandingPage
