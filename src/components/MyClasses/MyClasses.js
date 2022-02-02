import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Class from '../Class/Class';
import './index.css';

const initialState = [];

const MyClasses = () => {
	const [classes, setClasses] = useState(initialState);
	useEffect(() => {
		axios
			.get('https://anywhere-fitness-07-backend.herokuapp.com/api/classes')
			.then((res) => {
				setClasses(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<h1>My Classes</h1>

			{classes.map((item, idx) => (
				<Class key={idx} class={item} />
			))}
		</div>
	);
};

export default MyClasses;
