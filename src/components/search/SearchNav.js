import React from 'react';
import { NavLink } from 'react-router-dom';

const SearchNav = () => {
	return(
	<div>
		<nav>
		<link 
		href="https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap" 
		rel="stylesheet"/>
		<ul className="nav justify-content-center">
		<li className="nav-item mt-5">
		<NavLink to='/components/login/Login/'>			
		<h4 
		style={{'fontFamily':'Cutive Mono, monospace','marginRight':'20px', 'color':'black'}}>
		Login
		</h4>
		</NavLink>				
		</li>
		<li className="nav-item mt-5">
		<NavLink to='/components/register/Register'>
		<h4 		 
		style={{'fontFamily':'Cutive Mono, monospace', 'marginRight':'20px', 'color':'black'}}>
		Register
		</h4>
		</NavLink>
		</li>
		</ul>
		</nav>
		</div>
		)			
}
export default SearchNav;
