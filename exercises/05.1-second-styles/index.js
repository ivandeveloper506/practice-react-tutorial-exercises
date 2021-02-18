import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const buttonStyles = {
	//write button styles here

	fontSize: "16px",
	background: "yellow",
	border: "1px solid yellow",
	fontWeight: "bold",
	color: "black"
};

const badgeStyles = {
	//write the span styles here

	fontSize: "16px",
	background: "red",
	color: "white",
	borderRadius: 100
};

const Badge = props => {
	return (
		<button style={buttonStyles} type="button" className="btn btn-primary">
			{props.label}
			<span style={badgeStyles} className="badge badge-light ml-2">
				{props.number}
			</span>
		</button>
	);
};
Badge.propTypes = {
	label: PropTypes.string,
	number: PropTypes.string
};
//dont forget to change the label
ReactDOM.render(<Badge label="Alerts" number="2" />, document.querySelector("#myDiv"));
