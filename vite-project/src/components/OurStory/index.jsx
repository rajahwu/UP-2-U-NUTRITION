
import './OurStory.css'

const OurStory = () => {
    return (
        <>
      <div className="ourstory-page">
            <div className="ourstory-page-content">
                <div className="about-us-container">
                    <div className="flex flex-col">
                        <h1 id='ourstory-title'>ABOUT US</h1>
                        <div className="ourstory-body">{`Nico and Rosie's journey into the world of health and nutrition began as a shared passion for wellness and a love for culinary experimentation. Before they became the owners of their small, cozy health shop, they both led entirely different lives.

Rosie, had a background in marketing and worked in the corporate world. She too had her fair share of health struggles, battling the stress and hectic pace of her career. However, her interest in holistic well-being, combined with Nico's own transformation, ignited a shared mission. They wanted to help others achieve the same level of health and vitality they had found.

As they sat down to enjoy a nourishing meal together, the idea of opening a health shop sprouted. They wanted a place where people could find convenient, nutritious alternatives to traditional meals. Their shop would offer a menu filled with carefully crafted teas and protein bowls designed to replace a meal and leave customers feeling full and satisfied.`}</div>
                    </div>
                    <img id="owner-img" src="https://i.imgur.com/mfTz11d.png"></img>
                </div>   
            </div>
                <div>
                    <img className="ourstory-page-bg-img" src='/images/BG_Our_Story.png' alt='' />
                </div>
            </div >
        </>
    )
}


export default OurStory
