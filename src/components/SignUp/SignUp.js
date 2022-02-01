import React /*, { useState }*/ from 'react';
import { Button, Form, Input, Label } from 'reactstrap';

const SignUp = () => {
	// const [signUp, setSignUp] = useState({
	//     username: "",
	//     password: "",
	//     email: "",
	//   })

	return (
		<Form>
			<h3>Sign Up</h3>
			<Label>
				USERNAME
				<Input name="username" type="text" />
			</Label>

			<Label>
				EMAIL
				<Input name="email" type="email" />
			</Label>
			<Label>
				PASSWORD
				<Input name="password" type="password" />
			</Label>
			<Label>
				Are you a client or Instructor?
				<select name="role_type">
					<option>Client</option>
					<option>Instructor</option>
				</select>
			</Label>
			<Button>Sign Up!!!</Button>
		</Form>
	);
};

export default SignUp;
