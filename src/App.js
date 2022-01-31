import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

import { Link } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<h1>Welcome To The Project</h1>
			<Link to='/login'>Login</Link>
			<Login path="/login"/>
			<SignUp />
		

		</div>

		
		
		
		
	);
}

export default App;
