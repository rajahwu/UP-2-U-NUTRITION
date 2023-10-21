import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div className='nav-bar'>
			<div className='logo'>
				<NavLink exact to="/"><img id="main-logo" src="https://i.imgur.com/CMlgCNO.png"></img></NavLink>
				<div className='logo2'>
					<NavLink exact to="/our-story"><img id="sub-icon" src="https://i.imgur.com/Jq9BowW.png"></img></NavLink>
					<NavLink exact to="/menu"><img id="sub-icon" src="https://i.imgur.com/6HBCQjQ.png"></img></NavLink>
					<NavLink exact to="/events"><img id="sub-icon" src="https://i.imgur.com/cPARxw9.png"></img></NavLink>
					<NavLink exact to="/your-story"><img id="sub-icon" src="https://i.imgur.com/5hyTKlI.png"></img></NavLink>
				</div>
				<div className='cart'>
					<NavLink exact to="/cart"><img id="cart-icon" src="https://i.imgur.com/Aar6YWm.png"></img></NavLink>
				</div>
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
