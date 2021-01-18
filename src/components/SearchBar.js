import React, { useState } from "react";

export const SearchBar = ({ onFormSubmit }) => {
	const [term, setTerm] = useState("");

	const onInputChange = (e) => {
		setTerm(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		onFormSubmit(term);
	};

	return (
		<div className={"search-bar ui segment"}>
			<form onSubmit={onSubmit} action="" className="ui form">
				<div className="field">
					<label>Video Search</label>
					<input value={term} onChange={onInputChange} type="text" />
				</div>
			</form>
		</div>
	);
};
