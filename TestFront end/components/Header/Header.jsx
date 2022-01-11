import React, { Component } from "react";

import menuSVG from "../../assets/images/menu.svg";
import icon1SVG from "../../assets/images/icon1.svg";
import logo from "../../assets/images/logo.png";
import searchSVG from "../../assets/images/search.svg";
import searchBtnSVG from "../../assets/images/searchBtn.svg";
import newVideoSVG from "../../assets/images/newVideo.svg";
import appsSVG from "../../assets/images/apps.svg";
import notificationsSVG from "../../assets/images/notifications.svg";
import "./header.css";

export default class Header extends Component {
	render() {
		return (
			<header className={`top ${this.props.headerAdditionalClass}`}>
				<button onClick={this.props.onSearchBtnClick} className="back_btn">

				</button>
				<button onClick={this.props.onMenuClick} className="menu">
					<i className="fas fa-bars"></i>
				</button>
				<button className="logo" onClick={this.props.onLogoClick} >
					<img src={logo} alt="menu" className="logoImg" />
				</button>

				<div className="search">
					<input type="text" name="search" placeholder="Search" />
					<button className="search_btn">
						<img src={searchSVG} alt="menu" />
					</button>
				</div>

				<button onClick={this.props.onSearchBtnClick} className="search_btn">
					<img src={searchBtnSVG} alt="menu" />
				</button>

				<button className="new_video">
					<i className="fas fa-plus-square" style={{ fontSize: "25px" }}></i>
				</button>


				<button className="user_avatar">
					<i
						className="fas fa-user"
						style={{ fontSize: "20px" }}
					/>
				</button>
			</header>
		);
	}
}
