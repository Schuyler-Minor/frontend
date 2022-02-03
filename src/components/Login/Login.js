import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Button, Form, Input, Label } from 'reactstrap';
import './index.css';

import * as yup from 'yup';
import schema from '../../validations/LoginSchema';

// Mock Data

const initialState = {
	name: '',
	password: '',
	role: '',
};

const initialErrors  = {
	name: '',
	password: ''
}

const Login = ({ setLogged }) => {
	
	const { push } = useHistory();
	const [login, setLogin] = useState(initialState);
	const [errors, setErrors] = useState(initialErrors);

	const validate = (name, value) => {
		yup.reach(schema, name)
		  .validate(value)
		  .then(() => setErrors({ ...errors, [name]: '' }))
		  .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
	}

	useEffect(() => {
		schema.isValid(login)
	  }, [login])

	const change = (e) => {

		const { name, value } = e.target;
		validate(name, value)
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
			<span>{errors.name}</span> 
			<br />
			<Label>
				Password
				<Input
					type="password"
					name="password"
					placeholder="Enter Password"
					onChange={change}
					value={login.password}
				/>
			</Label>
			<br />
			<span>{errors.password}</span> 
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
			<span>{errors.role}</span> 
			<br />
			<Button>Login</Button>
		</Form>
	);
};

export default Login;
