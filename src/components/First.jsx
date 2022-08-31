import React from "react";
import "./style.css";

function First() {
	return (
		<div className="back">
			<div className="first">
				<div className="logo">
					<img src={require("../Static/logo-small 1.png")} alt="" />
				</div>
				<ul>
					<li>Home</li>
					<li>Services</li>
					<li>Classes</li>
					<li>Restaurant</li>
					<li>Blog</li>
					<li>Shop</li>
					<li className="EN">EN</li>
				</ul>
				<button>SIGN IN</button>
			</div>
			<div className="main">
				<div className="info">
					<h1>
						New Sport World in <strong>Vientiane</strong>
					</h1>
					<button>BOOK NOW >></button>
				</div>
				<div className="image">
					<img src={require("../Static/football_player_PNG85 1.png")} alt="" />
				</div>
			</div>
		</div>
	);
}

export default First;
