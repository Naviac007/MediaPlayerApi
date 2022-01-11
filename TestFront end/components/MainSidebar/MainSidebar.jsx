import React, { Component } from "react";
import feedback from "../../assets/images/feedback.svg";
import gaming from "../../assets/images/gaming.svg";
import help from "../../assets/images/help.svg";
import history from "../../assets/images/history.svg";
import home from "../../assets/images/home.svg";
import library from "../../assets/images/library.svg";
import liked from "../../assets/images/liked.svg";
import live from "../../assets/images/live.svg";
import movies from "../../assets/images/movies.svg";
import premium from "../../assets/images/premium.svg";
import report from "../../assets/images/report.svg";
import settings from "../../assets/images/settings.svg";
import subscriptions from "../../assets/images/subscriptions.svg";
import trending from "../../assets/images/trending.svg";
import watchLater from "../../assets/images/watchLater.svg";
import sports from "../../assets/images/sports.jpg";
import video from "../../assets/images/video.jpg";
import game from "../../assets/images/game.jpg";
import './main-sidebar.css';

export default class MainSidebar extends Component {
	render() {
		return (
			<section class="sidebar">
				<ul>
					<li>
						<i class="fas fa-home"></i>
						Home
					</li>
				</ul>
				<ul>
					<li>
						<i class="fas fa-file-video"></i>
						Library
					</li>

					<li>
						<i class="fas fa-thumbs-up"></i>
						Liked videos
					</li>
				</ul>

				<span class="title">Categories</span>

				<ul>
					<li>
						<img
							id="img"
							src={sports}
							width="24"
							height="24"
						/>
						Sports
					</li>
					<li>
						<img
							id="img"
							src={game}
							width="24"
							height="24"
						/>
						Gaming
					</li>
					<li>
						<img
							id="img"
							src={video}
							width="24"
							height="24"
						/>
						Movies
					</li>
				</ul>


			</section>
		);
	}
}
