import React from 'react';
import { Fragment } from 'react';
import Footer from '../footer/Footer';
import RegisterNav from '../register/RegisterNav';
import NavLogo from '../navlogo/NavLogo';

const Register = () => {

	const ageArray = [];
	const age = 21;
	for(var i = 0; i <= 78; i++){
		ageArray.push(age + i)
	}

	return(
		<Fragment>
		<RegisterNav/>
		<NavLogo/>
		<div className="mw7 center bg-black br2 pa2 pa2-ns 
		mv2 b--black-10 mt-5 shadow-lg mb-5 p-3 rounded">
		<div style={{'textAlign':'center','color':'white'}}>
		<h1>
		Register
		</h1>
		</div>
		<div className="card">
		<div className="card-body form-row">

		<div className="form-group col-md-6">
		<label htmlFor="inputEmail4">Email</label>
		<input type="email" className="form-control" id="inputEmail4"/>
		</div>

		<div className="form-group col-md-6">
		<label htmlFor="inputPassword4">Password</label>
		<input type="password" className="form-control" id="inputPassword4"/>
		</div>

		<div className="form-group col-md-6">
		<label >Name</label>
		<input type="text" className="form-control" id="inputAddress"/>
		</div>

		<div className="form-group col-md-6">
		<label>Zip Code</label>
		<input type="text" className="form-control"/>
		</div>

		<div className="form-group col-md-4">
		<label>I am a...</label>
		<select className="form-control">
		<option defaultValue='Male'>Male</option>
		<option>Male</option>
		<option>Female</option>
		</select>
		</div>

		<div className="form-group col-md-4">
		<label>Seeking a...</label>
		<select className="form-control">
		<option defaultValue='Female'>Female</option>
		<option>Male</option>
		<option>Female</option>
		</select>
		</div>

		<div className="form-group col-md-4">
		<label>Ethnic Background</label>
		<select className="form-control">
		<option defaultValue='Male'>Choose...</option>
		<option>Mixed</option>
		<option>African American</option>
		<option>European American</option>
		</select>
		</div>

		<div className="form-group col-md-1.5 tc">
		<label htmlFor="exampleFormControlSelect1">Age</label>
		<select className="form-control" id="exampleFormControlSelect1">
		{
			ageArray.map(age => <option key={age}>{age}</option>)
		}
		</select>	
		</div>

		<div className="form-group col-md-20 mt-1.5">
		<label htmlFor="exampleFormControlSelect1">Height: </label>
		</div>

		<div className="form-group col-md-1.5 tc">
		<label htmlFor="exampleFormControlSelect1">Feet  </label>
		<select className="form-control" id="exampleFormControlSelect1">
		<option>4'</option>
		<option>5'</option>
		<option>6'</option>
		<option>7'</option>
		<option>8'</option>
		</select>	
		</div>

		<div className="form-group col-md-1.5 tc">
		<label htmlFor="exampleFormControlSelect1">Inches</label>
		<select className="form-control" id="exampleFormControlSelect1">
		<option>0"</option>
		<option>1"</option>
		<option>2"</option>
		<option>3"</option>
		<option>4"</option>
		<option>5"</option>
		<option>6"</option>
		<option>7"</option>
		<option>8"</option>
		<option>9"</option>
		<option>10"</option>
		<option>11"</option>
		</select>	
		</div>

		<div className="form-group col-md-10">
		<label className='col-md-12 tc' htmlFor="exampleFormControlTextarea1">
		About Yourself
		</label>
		<textarea className="form-control" rows="1"></textarea>
		</div>

		<div className="custom-file col-md-6 ml-1 mr-md-3">
		<input type="file" className="custom-file-input"/>
		<label className="custom-file-label" htmlFor="customFile">
		Upload a photo
		</label>
		</div>
		
		<div className="form-group">
		<button 
		type="submit" 
		className="btn btn-primary ml-1">
		Register
		</button>
		</div>

		</div>
		</div>
		</div>
		<Footer/>
		</Fragment>
		)
}

export default Register;