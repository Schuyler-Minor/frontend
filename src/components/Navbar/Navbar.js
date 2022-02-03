import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = ({ logged }) => {
	return (
		<div>
			<nav>

				{!logged && (
					<>
						<Link to="/login">Login</Link>
						<Link to="/register">Sign Up</Link>
					</>
				)}
				{logged && (
					<>
						<Link to="/my-classes">My Classes</Link>
						<Link to="/available-classes">Available Classes</Link>
						<Link to="/logout">Logout</Link>
            <Link to="/add-class">Add Class</Link>
					</>
				)}
			</nav>
		</div>
	);
};

export default Navbar;
