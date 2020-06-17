import React from 'react';
import logo from './logo_transparent.png';

function Header(){
	return(
		<div>
		<nav className="navbar navbar-light d-flex justify-content-center" style={{'backgroundColor': '#618DF1'}}>
		<div>
		<h4>Get To Know You</h4>
  		<span className="navbar-brand mb-0 h4"><img style= {{'height':'150px', 'width':'150px'}} src={`${logo}`} alt='GTKY'/></span>
  		</div>
        </nav>		
		</div>
		
	
		)
}
export default Header;