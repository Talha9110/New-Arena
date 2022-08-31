import React from "react";

function Second() {
	return (
		<>
			<div className="second">
				<div className="images">
					<img className="rect" src={require("../Static/Rectangle 71.png")} alt="" />
					<img className="who" src={require("../Static/WHO WE ARE.png")} alt="" />
				</div>
				<div className="last">
					<img src={require("../Static/139.png")} alt="" />
				</div>
			</div>
			<div className="infor">
				<p>
					New Arena was established in 2014 with only 2 artificial soccer field and a swimming pool to serve our customers, but now we would like to introduce ourself as a New Arena Sports and fitness
					center.
					<br />
					<br />
					New Arena is not just a sports and fitness club, it's a perfect place to start your healthy life, get fit, and become stronger in a friendly and fun atmosphere. Our center is designed to meet all
					kinds of client needs.
				</p>
				<button>READ MORE</button>
			</div>
		</>
	);
}

export default Second;
