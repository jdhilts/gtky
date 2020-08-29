import React from 'react';
import PrefNav from '../preferences/PrefNav';
import { Fragment } from 'react';
import Footer from '../footer/Footer';
import NavLogo from '../navlogo/NavLogo';

const Preferences = () => {

	const ageArray = [];
	const age = 21;
	for(var i = 0; i <= 78; i++){
		ageArray.push(age + i)
	}

	return(
		<Fragment>
		<PrefNav/>
		<NavLogo/>

		<div className="mw7 center bg-black br2 pa2 pa2-ns 
		mv2 b--black-10 mt-5 shadow-lg mb-5 p-3 rounded">
		<div style={{'textAlign':'center','color':'white'}}>
		<h1>
		Search Settings
		</h1>
		</div>

		<div className="card">
		<div className="card-body form-row">

		<div className="form-group col-md-6">
		<label>Zip Code</label>
		<input type="text" className="form-control"/>
		</div>

		<div className="form-group col-md-6">
		<label htmlFor="customRange2">Distance</label>
		<input type="range" className="custom-range" min="0" max="2000" id="customRange2"/>
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
		<label>Ethnicity</label>
		<select className="form-control">
		<option defaultValue='Male'>Choose...</option>
		<option>Mixed</option>
		<option>African American</option>
		<option>European American</option>
		</select>
		</div>

		<div className="form-group col-md-1.5">
		<label htmlFor="exampleFormControlSelect1">Age from..</label>
		<select className="form-control" id="exampleFormControlSelect1">
		{
			ageArray.map(age => <option key={age}>{age}</option>)
		}
		</select>	
		</div>

		<div className="form-group col-md-1.5">
		<label htmlFor="exampleFormControlSelect1">Age to..</label>
		<select defaultValue='99' className="form-control" id="exampleFormControlSelect1">
		{
			ageArray.map(age => <option key={age}>{age}</option>)
		}
		</select>	
		</div>

		<div className="form-group col-md-9">
		</div>

		<div className="form-group">
		<button 
		type="submit" 
		className="btn btn-primary ml-1">
		Search
		</button>
		</div>

		</div>
		</div>
		</div>
		<Footer/>
		</Fragment>
		)
}
export default Preferences;