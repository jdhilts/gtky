import React from 'react';
import Footer from '../footer/Footer';
import { Fragment } from 'react';
import NavLogo from '../navlogo/NavLogo';
import LoginNav from './LoginNav';

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			'email':'',
			'password':''
	}
}

	render(){
		return(
			<Fragment>
			<LoginNav/>
			<NavLogo/>
			<div>
			<article className="mw6 center bg-black br2 pa2 pa2-ns 
			mv2 b--black-10 mt-5 shadow-lg mb-5 p-3 rounded">
			<h1 style={{'textAlign':'center','color':'white'}}>
			Login
			</h1>
			<div className="card">
			<div className="card-body">
			<div>
			<div className="form-group">
			<label>
			Email Address
			</label>
			<input 
			type="email" 
			className="form-control"/>
			<small 
			className="form-text text-muted">
			We'll never share your email with anyone else.
			</small>
			</div>
			<div 
			className="form-group">
			<label>
			Password
			</label>
			<input 
			type="password" 
			className="form-control"/>
			</div>
		{/*<div className="form-group form-check">
		<input type="checkbox" className="form-check-input"/>
		<label className="form-check-label">Check me out</label>
	</div>*/}
	<button 
	type="submit"	
	className="btn btn-primary">
	Login
	</button>
	</div>
	</div>
	</div>
	</article>
	</div>
	<Footer/>
	</Fragment>
	)
	}
}
export default Login;