import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {


	return (
		<div className='nav-bar'>
			<div className='logo'>
				<div className='nutrition-logo'>
					<NavLink exact to="/"><img id="main-logo" src="https://i.imgur.com/CMlgCNO.png"></img></NavLink>
				</div>
				<div className='logo2'>
					<NavLink exact to="/our-story"><img id="sub-icon"
						src="https://i.imgur.com/Jq9BowW.png" className='ourstory-1'></img></NavLink>
					{/* <NavLink exact to="/our-story"><img id="sub-icon" src="https://i.imgur.com/bmwn5DQ.png" className='ourstory-2'></img></NavLink> */}
					<NavLink exact to="/menu"><img id="sub-icon" src="https://i.imgur.com/6HBCQjQ.png"></img></NavLink>
					<NavLink exact to="/events"><img id="sub-icon" src="https://i.imgur.com/cPARxw9.png"></img></NavLink>
					<NavLink exact to="/your-story"><img id="sub-icon" src="https://i.imgur.com/5hyTKlI.png"></img></NavLink>
					<NavLink exact to="/cart"><img id="sub-icon" src="https://i.imgur.com/Aar6YWm.png"></img></NavLink>
				</div>
			</div>
			<div className="all-line">
				<div className="orange-line"></div>
				<div className="red-line"></div>
				<div className="green-line"></div>
				<div className="blue-line"></div>
			</div>
			{/* {isLoaded && (
				<li>
					<ProfileButton user={sessionUser} />
				</li>
			)} */}
		</div>
	);
}

export default Navigation;
