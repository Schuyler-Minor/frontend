import React /*, { useState }*/ from 'react';
import { Button, Form, Input, Label } from 'reactstrap';

const Login = () => {
	// const [login, setLogin] = useState({
	//     username: "",
	//     password: "",
	// })

	return (
		<Form>
			<h1>Login</h1>
			<Label>
				USERNAME
				<Input name="username" type="text" />
			</Label>
			<Label>
				PASSWORD
				<Input name="password" type="password" />
			</Label>
			<Button>Login</Button>
		</Form>
	);
};

export default Login;
