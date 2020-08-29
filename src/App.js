import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Search from './components/search/Search';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Index from './components/index/Index';
import Home from './components/home/Home';
//import Preferences from './components/preferences/Preferences';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			'isLoggedIn': false
		}
	}

render(){
	const {isLoggedIn} = this.state;
		if(isLoggedIn){
			return(
				<Router>
				<Switch>
				<Route path='/components/search/Search' component = { Search }/>
				<Route path='/components/register/Register' component = { Register }/>
				<Route path='/components/login/Login' component = { Login }/>
				<Route path='/' component = { Index }/>
				</Switch>
				</Router>
				)
		
		} else {
			return(
				<Router>
				<Switch>
				<Route Path='/components/home/Home' component = { Home }/>
				</Switch>
				</Router>
				)
		}
		}
	}

export default App;


