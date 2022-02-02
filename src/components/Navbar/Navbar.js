import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => {
	return (
		<div>
			<nav>
				<Link to="/login">Login</Link>
				<Link to="/signup">Sign Up</Link>
				<Link to="/my-classes">My Classes</Link>
				<Link to="/add-class">Add Class</Link>
				<Link to="/logout">Logout</Link>
			</nav>
		</div>
	);
};

export default Navbar;
