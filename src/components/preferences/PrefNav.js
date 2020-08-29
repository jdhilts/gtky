import React from 'react';
import {NavLink} from 'react-router-dom';

const PrefNav = () => {
	return(
		<div>
		<nav>
		<link 
		href="https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap" 
		rel="stylesheet"/>
		<ul className="nav justify-content-center">
		<li className="nav-item mt-5">
		<NavLink to='/components/signout/SignOut/'>			
		<h4 
		style={{'fontFamily':'Cutive Mono, monospace','marginRight':'20px', 'color':'black'}}>
		Sign Out
		</h4>
		</NavLink>				
		</li>
		<li className="nav-item mt-5">
		<NavLink to='/components/editprofile/EditProfile'>
		<h4 		 
		style={{'fontFamily':'Cutive Mono, monospace', 'marginRight':'20px', 'color':'black'}}>
		Edit Profile
		</h4>
		</NavLink>
		</li>
		<li className="nav-item mt-5">
		<NavLink to='/components/messages/Messages'>
		<h4 		 
		style={{'fontFamily':'Cutive Mono, monospace', 'marginRight':'20px', 'color':'black'}}>
		Messages
		</h4>
		</NavLink>
		</li>
		</ul>
		</nav>
		</div>			
		)
}
export default PrefNav;