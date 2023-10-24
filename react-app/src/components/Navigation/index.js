import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector((state) => state.session.user);
	const [menuImgSrc, setMenuImgSrc] = useState("https://i.imgur.com/6HBCQjQ.png");

	const handleMenuHover = () => {
		setMenuImgSrc("https://i.imgur.com/bmwn5DQ.png");
	};

	const handleMenuLeave = () => {
		setMenuImgSrc("https://i.imgur.com/6HBCQjQ.png");
	};

	return (
		<div className="nav-bar">
			<div className="logo">
				<div className="nutrition-logo">
					<NavLink exact to="/">
						<img id="main-logo" src="https://i.imgur.com/CMlgCNO.png" alt="Main Logo" />
					</NavLink>
				</div>
				<div className="logo2">
					<NavLink exact to="/our-story">
						<img id="sub-icon" src="https://i.imgur.com/Jq9BowW.png" className="ourstory-1" alt="Our Story" />
					</NavLink>
					<NavLink exact to="/menu">
						<img
							id="sub-icon"
							src={menuImgSrc}
							alt="Menu"
							onMouseEnter={handleMenuHover}
							onMouseLeave={handleMenuLeave}
						/>
					</NavLink>
					<NavLink exact to="/events">
						<img id="sub-icon" src="https://i.imgur.com/cPARxw9.png" alt="Events" />
					</NavLink>
					<NavLink exact to="/your-story">
						<img id="sub-icon" src="https://i.imgur.com/5hyTKlI.png" alt="Your Story" />
					</NavLink>
					<NavLink exact to="/cart">
						<img id="sub-icon" src="https://i.imgur.com/Aar6YWm.png" alt="Cart" />
					</NavLink>
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
