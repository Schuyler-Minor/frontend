import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import './App.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import MyClasses from './components/MyClasses/MyClasses';
import ReserveClass from './components/ReserveClass/ReserveClass';
import Logout from './components/Logout/Logout';

function App() {
	const [logged, setLogged] = useState(false);

	useEffect(() => {
		const isLoggedIn = localStorage.getItem('token');
		if (isLoggedIn) {
			setLogged(true);
		} else {
			setLogged(false);
		}
	}, []);

	return (
		<div className="App">
			<Navbar logged={logged} />
			<Switch>
				<PrivateRoute exact path="/" component={MyClasses} />
				<Route path="/login">
					<Login setLogged={setLogged} />
				</Route>
				<Route path="/register">
					<SignUp setLogged={setLogged} />
				</Route>
				{/* Need to align with paths from Hailey */}
				<PrivateRoute path="/my-classes" component={MyClasses} />
				<PrivateRoute path="/reserve-class" component={ReserveClass} />
				<PrivateRoute path="/logout" component={Logout} />
			</Switch>
		</div>
	);
}

export default App;
