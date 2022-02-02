import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Button, Form, Input, Label } from 'reactstrap';
import './index.css';

// Mock Data
const initialState = {
	name: '',
	password: '',
	role: '',
};

const Login = ({ setLogged }) => {
	const { push } = useHistory();
	const [login, setLogin] = useState(initialState);

	const change = (e) => {
		const { name, value } = e.target;

		// const valueToUse = type === 'checkbox' ? checked : value;

		setLogin({
			...login,
			[name]: value,
		});
	};

	const submit = (e) => {
		e.preventDefault();

		if (login.role === 'client') {
			const body = {
				client_name: login.name,
				password: login.password,
			};
			axios
				.post(
					'https://anywhere-fitness-07-backend.herokuapp.com/api/auth/clients/login',
					body
				)
				.then((res) => {
					// Save Token to localStorage,
					localStorage.setItem('token', res.data.token);
					// Push user to /my-classes
					push('/my-classes');
					setLogged(true);
				})
				// handle errors
				.catch((err) => console.log(err));
		} else if (login.role === 'instructor') {
			const body = {
				instructor_name: login.name,
				password: login.password,
			};
			axios
				.post(
					'https://anywhere-fitness-07-backend.herokuapp.com/api/auth/instructors/login',
					body
				)
				.then((res) => {
					// Save Token to localStorage,
					localStorage.setItem('token', res.data.token);
					// Push user to /my-classes
					push('/my-classes');
					setLogged(true);
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<Form onSubmit={submit}>
			<h1>Login</h1>
			<Label>
				Name
				<Input
					type="text"
					name="name"
					placeholder="Enter Name"
					onChange={change}
					value={login.name}
				/>
			</Label>
			<br />
			<Label>
				Password
				<Input
					type="text"
					name="password"
					placeholder="Enter Password"
					onChange={change}
					value={login.password}
				/>
			</Label>
			<br />
			<Label>
				Login as <br />
				<Input
					type="radio"
					name="role"
					value="client"
					onChange={change}
					checked={login.role === 'client'}
				/>
				Client
				<Input
					type="radio"
					name="role"
					value="instructor"
					onChange={change}
					checked={login.role === 'instructor'}
				/>
				Instructor
			</Label>
			<br />
			<Button>Login</Button>
		</Form>
	);
};

export default Login;
