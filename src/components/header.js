import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

	render() {
		return (
			<div>
				{/* Page Preloder */}
				<div id="preloder">
					<div className="loader" />
				</div>
				{/* Header section */}
				<header className="header-section">
					<div className="header-top">
						<div className="container">
							<div className="row">
								<div className="col-lg-2 text-center text-lg-left">
									{/* logo */}
									<a href="./index.html" className="site-logo">
										<img src="img/logo3.jpg" alt />
									</a>
								</div>
								<div className="col-xl-6 col-lg-5">
									<form className="header-search-form">
										<input type="text" placeholder="Search on divisima ...." />
										<button><i className="flaticon-search" /></button>
									</form>
								</div>
								<div className="col-xl-4 col-lg-5">
									<div className="user-panel">
										<div className="up-item">
											<i className="flaticon-profile" />
											<a href="#" style={{fontSize:'20px'} }> Sign In </a>  
										</div>
										<div className="up-item">
											<div className="shopping-card">
												<i className="flaticon-profile" />
											 </div>
											<a href="#" style={{fontSize:'20px'} }>Log out</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<nav className="main-navbar">
						<div className="container">
							{/* menu */}
							<ul className="main-menu">
								<li><a href="#">Home</a></li>
								<li><a href="#">About us</a></li>
								<li><a href="#">Event</a>
									<ul className="sub-menu">
										<li><a href="#">Donate Clothers</a></li>
										<li><a href="#">Donate Foods</a></li>
										<li><a href="#">Donate Books</a></li>
									 </ul>
								</li>
								<li><a href="#">Pages</a>
									<ul className="sub-menu">
										<li><a href="./product.html">Product Page</a></li>
										<li><a href="./category.html">Category Page</a></li>
										<li><a href="./cart.html">Cart Page</a></li>
										<li><a href="./checkout.html">Checkout Page</a></li>
										<li><a href="./contact.html">Contact Page</a></li>
									</ul>
								</li>
								<li><a href="#">Blog</a></li>
								<li><a href="#">Account</a>
									<ul className="sub-menu">
										<li><a href="./product.html">Profile</a></li>
										<li><a href="./category.html">Log out Page</a></li>
										 
									</ul>
								</li>
							</ul>
						</div>
					</nav>
				</header>
			</div>
		);
	}
}


