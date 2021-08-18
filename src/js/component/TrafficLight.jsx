import React, { useState } from "react";

const TrafficLight = () => {
	const [color, setSelected] = useState("");
	return (
		<div className="Traffic-Light">
			<div className="Traffic-Top"></div>
			<div className="traffic-container">
				<div
					onClick={() => setSelected("red")}
					className={
						"light red" + (color === "red" ? " selected" : "")
					}></div>
				<div
					onClick={() => setSelected("yellow")}
					className={
						"light yellow" + (color === "yellow" ? " selected" : "")
					}></div>
				<div
					onClick={() => setSelected("green")}
					className={
						"light green" + (color === "green" ? " selected" : "")
					}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
