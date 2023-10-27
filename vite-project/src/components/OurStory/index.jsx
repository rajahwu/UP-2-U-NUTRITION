import OpenModalButton from '../OpenModalButton'
import { ContactUsModal } from './utility/contactUs'
import LoginFormModal from '../LoginFormModal'

import { athletes } from './utility/athletes'

import './OurStory.css'

const OurStory = () => {

    return (
        <>
        <div className="ourstory-page">
            <div className="ourstory-page-bgimg"></div>
            <div className="ourstory-page-content">
                <OpenModalButton 
                    buttonText='OUR STORY'
                    id='ourstory-title'
                    modalComponent={<LoginFormModal />}
                />
                <img id="owner-img" src="https://i.imgur.com/mfTz11d.png"></img>
                <div className="ourstory-body">Ex cillum deserunt irure deserunt qui magna nostrud id cillum proident fugiat cupidatat duis. Excepteur pariatur reprehenderit do commodo do eu proident voluptate consectetur. Lorem incididunt occaecat quis minim. Cupidatat adipisicing minim ut aliqua esse. Lorem magna eu cupidatat quis duis fugiat dolore do id ut.

                        Laborum eu culpa velit enim minim eiusmod dolore officia fugiat. Est laborum laborum labore laboris nostrud et mollit veniam. Magna adipisicing voluptate occaecat et dolore qui consequat. Occaecat voluptate do incididunt laboris. Ipsum labore minim ullamco sint laboris commodo voluptate tempor sunt aliqua. Ipsum commodo id anim eu officia cupidatat commodo tempor consequat magna. Cillum exercitation ullamco tempor enim do enim ut est non. Id cillum do occaecat id ad qui esse culpa et in nulla quis voluptate veniam. Enim aliquip nisi velit commodo est veniam sit elit consequat. Consectetur quis labore sint non pariatur commodo voluptate officia adipisicing non. Laborum consequat occaecat irure eiusmod officia sit exercitation cillum aliquip deserunt nulla consequat aute dolore.

                        Ad occaecat qui enim proident elit dolor reprehenderit irure id adipisicing labore pariatur quis Lorem. Reprehenderit sunt id adipisicing id ut ea. Fugiat qui laborum consequat nisi elit est ut anim nostrud aliqua elit laboris id.

                        Occaecat veniam quis aute mollit. Sit nisi sint in exercitation anim. Exercitation sit anim velit amet dolore duis in labore deserunt quis dolore sunt. Eiusmod irure consequat laborum cupidatat cupidatat. Dolor consequat minim qui ex nostrud incididunt ea. Pariatur occaecat ut occaecat ut labore voluptate aliqua mollit do duis.

                        Do in ad mollit deserunt ad laboris consequat sit ut esse irure deserunt quis duis. Quis minim culpa tempor excepteur consectetur cupidatat. Fugiat id occaecat nisi et. Qui enim dolore in dolore proident qui ipsum mollit esse quis sint culpa cupidatat incididunt. Ex est enim nostrud id nulla tempor laborum labore voluptate quis exercitation magna ad. Incididunt occaecat anim deserunt ipsum qui exercitation eiusmod enim id adipisicing ullamco.</div>
                    <div className="headers bg-titles-blue">SPONSORING</div>
                    <div className="sponsored-athletes-section">
                        <div className="sponsored-athletes">
                            {athletes.map((athlete, i) => {
                                return (
                                    <div className='athlete-container' key={`${athlete}-${i}`}>
                                        <div className='our-story-athlete-image-container'>
                                            <img src={athlete.image} alt='' />
                                        </div>
                                        {/* <div> */}
                                        <div className='our-story-athlete-name'>
                                            {athlete.name}
                                        </div>
                                        <div className='our-story-athlete-position'>
                                            {`Position: ${athlete.position}`}
                                        </div>
                                        <div className='our-story-athlete-favorite'>
                                            {`Favorite Drink: ${athlete.favorite_drink}`}
                                        </div>
                                        {/* </div> */}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="headers bg-titles-blue">CONTACT US</div>
                    <OpenModalButton
                        buttonText='Send message or email'
                        className="green-btn mess-email-btn"
                        onItemClick=''
                        modalComponent={<ContactUsModal />}
                    />
                    <div className="ourstory-contact-section">
                        <div className='hours-and-address'>
                            <div className='business-hours'>
                                <div className='address-hours-title'>Business Hours:</ div>
                                <div className='actual-hours'>
                                    <br />
                                    <span>Monday 7:30AM-8PM</span>
                                    <br />
                                    <span>Tuesday 7:30AM-8PM</span>
                                    <br />
                                    <span>Wednesday 7:30AM-8PM</span>
                                    <br />
                                    <span>Thursday 7:30AM-8PM</span>
                                    <br />
                                    <span>Friday 7:30AM-8PM</span>
                                    <br />
                                    <span>Saturday 9AM-3PM</span>
                                    <br />
                                    <span>Sunday 9AM-3PM</span>
                                    <br />
                                </div>
                            </div>
                            <div className='address'>
                                <div className='address-hours-title'>Address:</div>
                                <div className='actual-address'>
                                    <span>
                                        1517 NW 23rd Ave,
                                    </span>
                                    <br />
                                    <span>
                                        Gainesville, FL 32605
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* <span id="phone-number">Phone: (786) 651-1153 </span> */}
                    </div>
                    <div>
                        <img className="ourstory-page-bg-img" src='/images/BG_Our_Story.png' alt='' />
                    </div>
                </div>
            </div >
        </>
    )
}


export default OurStory
