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
	code: '',
};

const SignUp = ({ setLogged }) => {
	const [signup, setSignup] = useState(initialState);

	const { push } = useHistory();

	const change = (e) => {
		const { name, value } = e.target;

		setSignup({
			...signup,
			[name]: value,
		});
	};

	const submit = (e) => {
		e.preventDefault();

		if (signup.role === 'client') {
			const body = {
				client_name: signup.name,
				password: signup.password,
			};
			axios
				.post(
					'https://anywhere-fitness-07-backend.herokuapp.com/api/auth/clients/register',
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
		} else if (signup.role === 'instructor') {
			const body = {
				instructor_name: signup.name,
				password: signup.password,
			};
			axios
				.post(
					'https://anywhere-fitness-07-backend.herokuapp.com/api/auth/instructors/register',
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
			<h1>Sign Up</h1>
			<Label>
				Name
				<Input
					type="text"
					name="name"
					placeholder="Enter Name"
					onChange={change}
					value={signup.name}
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
					value={signup.password}
				/>
			</Label>
			<br />
			<Label>
				Sign Up as <br />
				<Input
					type="radio"
					name="role"
					value="client"
					onChange={change}
					checked={signup.role === 'client'}
				/>
				Client
				<Input
					type="radio"
					name="role"
					value="instructor"
					onChange={change}
					checked={signup.role === 'instructor'}
				/>
				Instructor
			</Label>
			{signup.role === 'instructor' ? (
				<div>
					<Label>
						Secret Auth Code
						<Input
							type="text"
							name="code"
							placeholder="Enter Code"
							onChange={change}
							value={signup.code}
						/>
					</Label>
				</div>
			) : null}
			<br />
			<Button>Sign Up</Button>
		</Form>
	);
};

export default SignUp;
