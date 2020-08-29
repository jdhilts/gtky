import React from 'react';
import logo from './logo_transparent.png';

const Logo = () => {
	return(
		<div 
		style={{'textAlign':'center'}}>
		<link 
		href="https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap" 
		rel="stylesheet"/>
		<img 
		src={logo} 
		alt="Get To Know You"/>
		<h1 
		style={{'fontFamily':'Cutive Mono, monospace'}} >
		A dating site that is on another level of online experience.
		</h1>
		</div>
		)
}
export default Logo;