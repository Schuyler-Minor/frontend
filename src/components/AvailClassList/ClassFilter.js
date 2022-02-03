import React, { useState } from 'react';
import Class from '../Class/Class';
import { StyledSearch, SearchBar } from '../../styled-comps/index';

const ClassFilter = (props) => {
	const { classes } = props;

	const [searchTerm, setSearchTerm] = useState('');

	return (
		<StyledSearch>
			<SearchBar>
				<input
					type="text"
					placeholder="Search Classes"
					onChange={(event) => {
						setSearchTerm(event.target.value);
					}}
				/>
			</SearchBar>

			{classes
				.filter((value) => {
					if (searchTerm === '') {
						return value;
					} else if (
						value.class_name.toLowerCase().includes(searchTerm.toLowerCase())
					) {
						return value;
					} else if (
						value.location.toLowerCase().includes(searchTerm.toLowerCase())
					) {
						return value;
					} else if (
						value.class_type.toLowerCase().includes(searchTerm.toLowerCase())
					) {
						return value;
					} else if (
						value.start_time.toLowerCase().includes(searchTerm.toLowerCase())
					) {
						return value;
					} else if (
						value.duration.toLowerCase().includes(searchTerm.toLowerCase())
					) {
						return value;
					} else if (
						`${value.intensity_level}`
							.toLowerCase()
							.includes(searchTerm.toLowerCase())
					) {
						return value;
					} else {
						return null;
					}
				})
				.map((value) => {
					return <Class key={value.class_id} fitnessClass={value} />;
				})}
		</StyledSearch>
	);
};

export default ClassFilter;
