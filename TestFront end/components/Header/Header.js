import React, { Component } from "react";

import menuSVG from "../../assets/images/menu.svg";
import icon1SVG from "../../assets/images/icon1.svg";
import logoSVG from "../../assets/images/logo.svg";
import searchSVG from "../../assets/images/search.svg";
import searchBtnSVG from "../../assets/images/searchBtn.svg";
import newVideoSVG from "../../assets/images/newVideo.svg";
import appsSVG from "../../assets/images/apps.svg";
import notificationsSVG from "../../assets/images/notifications.svg";
import "./header.css";

export default class Header extends Component {
	render() {
		return (
			<header className="top">
				<button onClick={this.props.onSearchBtnClick} class="back_btn">
					<img src={icon1SVG} alt="menu" />
				</button>
				
				<button class="logo" onClick={this.props.onLogoClick} >
					<img src={logoSVG} alt="menu" />
				</button>

				<div class="search">
					<input type="text" name="search" placeholder="Search" />
					<button class="search_btn">
						<img src={searchSVG} alt="menu" />
					</button>
				</div>

				<button onClick={this.props.onSearchBtnClick} class="search_btn">
					<img src={searchBtnSVG} alt="menu" />
				</button>

				<button class="new_video">
					<img src={newVideoSVG} alt="menu"
					width="20"
					height="80"
					alt="Man free icon"
					title="Man free icon" />
				</button>

				<button class="user_avatar">
					<img
						src="https://image.flaticon.com/icons/svg/145/145843.svg"
						width="224"
						height="224"
						alt="Man free icon"
						title="Man free icon"
					/>
				</button>
			</header>
		);
	}
}
