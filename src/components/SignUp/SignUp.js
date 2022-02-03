import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { SECRET_CODE } from '../../mocks';
import { Button, Form, Input, Label } from 'reactstrap';
import './index.css';

import * as yup from 'yup';
import schema from '../../validations/SignUpSchema';

// Mock Data

const initialState = {
	name: '',
	password: '',
	role: '',
	code: '',
};

const initialErrors  = {
	name: '',
	password: '',
	role: ''
}

const SignUp = ({ setLogged }) => {

	const [signup, setSignup] = useState(initialState);
	const [errors, setErrors] = useState(initialErrors);

	const { push } = useHistory();

	const validate = (name, value) => {
		yup.reach(schema, name)
		  .validate(value)
		  .then(() => setErrors({ ...errors, [name]: '' }))
		  .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
	}

	useEffect(() => {
		schema.isValid(signup)
	  }, [signup])

	const change = (e) => {
		
		const { name, value } = e.target;
		validate(name, value)
		
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
			window.alert('CORRECT!');
		} else if (signup.role === 'instructor') {
			if (signup.code === SECRET_CODE) {
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
			} else {
				window.alert('Wrong Code!');
			}
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
				<span>{errors.name}</span> 
				<br />
			<Label>
				Password
				<Input
					type="password"
					name="password"
					placeholder="Enter Password"
					onChange={change}
					value={signup.password}
				/>
			</Label>
				<br />
				<span>{errors.password}</span> 
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
