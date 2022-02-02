import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import MyClasses from './components/MyClasses/MyClasses';
import Logout from './components/Logout/Logout';


// import CreateClass from './components/CreateClass/CreateClass';
import AddClass from './components/AddClass/AddClass';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				{/* Need to align with paths from Hailey */}
				<Route path="/my-classes" element={<MyClasses />} />
				
				<Route path="/logout" element={<Logout />} />
				<Route path="/add-class" element={<AddClass />} />
			</Routes>

			
		</div>
	);
}

export default App;

