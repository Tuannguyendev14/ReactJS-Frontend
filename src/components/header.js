import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

	render() {
		return (
			<div>
				 
				{/* Header section */}
				<header className="header-section">
					<div className="header-top">
						<div className="container">
							<div className="row">
								<div className="col-lg-2 text-center text-lg-left">
									 
									<a href="./index.html" className="site-logo">
										<img src="img/logo3.jpg" alt="ok"  />
									</a>
								</div>
								<div className="col-xl-6 col-lg-5">
									<form className="header-search-form">
										<input type="text" placeholder="Da Nang Volunteering ...." />
										<button><i className="flaticon-search" /></button>
									</form>
								</div>
								<div className="col-xl-4 col-lg-5">
									<div className="user-panel">
										<div className="up-item">
											<i className="flaticon-profile" />
											<a href="/login" style={{fontSize:'20px'} }> Sign In </a>  
										</div>
										<div className="up-item">
											<div className="shopping-card">
												<i className="flaticon-profile" />
											 </div>
											<a href="/signup" style={{fontSize:'20px'} }>Log out</a>
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
								<li> <Link to="/" className="nav-link">Home</Link> </li>
								<li><Link to="/footer" className="nav-link"> About us</Link></li>
								<li><a href="/ewrw">Event</a>
									<ul className="sub-menu">
										<li><a href="/ffwef">Donate Clother</a></li>
										<li><a href="/erwe">Donate Food</a></li>
										<li><a href="/rweew ">Donate Books</a></li>
									 </ul>
								</li>
								<li><a href="/kk">Pages</a>
									<ul className="sub-menu">
										<li><a href="./product.html">Product Page</a></li>
										<li><a href="./category.html">Category Page</a></li>
										<li><a href="./cart.html">Cart Page</a></li>
										<li><a href="./checkout.html">Checkout Page</a></li>
										<li><a href="./contact.html">Contact Page</a></li>
									</ul>
								</li>
								<li><a href="/ll">Blog</a></li>
								<li><a href="/kk">Account</a>
									<ul className="sub-menu">
										<li><a href="./product.html">Profile</a></li>
										<li><Link to="/poststatus" className="nav-link">Post status</Link> </li>
										<li><a href="./category.html">Log out Page</a></li>
										<li><Link to="/join" className="nav-link">Join us</Link> </li>

										 
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


