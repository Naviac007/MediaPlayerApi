import React, { Component } from "react";
import home from "../../assets/images/home.svg";
import homeRed from "../../assets/images/homeRed.svg";

import library from "../../assets/images/library.svg";
import subscriptions from "../../assets/images/subscriptions.svg";
import trending from "../../assets/images/trending.svg";

import "./small-sidebar.css";

export default class SmallSidebar extends Component {
	render() {
		return (
			<section class="sidebar_small">
				<ul>
					<li>
						<i class="fas fa-home"></i>
						Home
					</li>
					<li>

						<i class="fas fa-thumbs-up"></i>
						Liked Videos
					</li>
					<li>
						<i class="fas fa-file-video"></i>
						Library
					</li>
				</ul>
			</section>
		);
	}
}
