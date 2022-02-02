import React, { useState } from 'react';
import styled from 'styled-components';

const Class = (props) => {
	// const { fitnessClass } = props;
	const [open, setOpen] = useState(false);
	const handleToggle = () => setOpen(!open);
	return (
		<StyledClass>
			{/* <h3>{fitnessClass.name}</h3> */}

			{open ? (
				<div className="infoDiv">
					{/* <p> Intensity: {fitnessClass.intensity}</p>

					<p>Location: {fitnessClass.location}</p>

					<p>Duration: {fitnessClass.duration}</p> */}

					<button onClick={handleToggle}>Close</button>
					<button>Register</button>
				</div>
			) : (
				<button className="infoButton" onClick={handleToggle}>
					More Info
				</button>
			)}
		</StyledClass>
	);
};

//More info route to new page, or stay in class List?

export default Class;

const StyledClass = styled.div`
	display: flex;
	flex-flow: column wrap;
	background: lightblue;
	margin: 3% auto;
	color: black;
	width: 50%;
	padding: 2%;

	& .infoButton {
		width: 50%;
		margin: 3% auto;
	}

	& .infoDiv {
		display: flex;
		flex-flow: column wrap;
	}

	& .infoDiv button {
		width: 50%;
		margin: auto;
	}

	h3 {
		margin: auto;
	}

	p {
		margin: auto;
	}
`;
