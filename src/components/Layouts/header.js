import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

	logout = () => {
		this.props.logout();
	}

	render() {

		const { auth, profile } = this.props;

		const links = auth.uid ?
			<div className="up-item">
				<div className="shopping-card">
					<i className="glyphicon glyphicon-log-out" />
				</div>
				<a href="/login" style={{ fontSize: '20px' }} onClick={this.logout}>Log out</a>
			</div>
			:
			<div>
				<div className="up-item">
					<i className=" glyphicon glyphicon-log-in" />
					<a href="/login" style={{ fontSize: '20px' }}> Sign In </a>
				</div>
				<div className="up-item">
					<div className="shopping-card">
						<i className="glyphicon glyphicon-log-out" />
					</div>
					<a href="/signup" style={{ fontSize: '20px' }} >Sign up</a>
				</div></div>
			;

		return (
			<div>
				{/* Header section */}
				<header className="header-section">
					<div className="header-top">
						<div className="container">
							<div className="row">
								<div className="col-lg-2 text-center text-lg-left">
									<a href="./index" className="site-logo">
										<img src="img/logo3.jpg" alt="ok" />
									</a>
								</div>
								<div className="col-xl-6 col-lg-5">
									<form className="header-search-form">
										<input type="text" placeholder="Da Nang Volunteering ...." />
										<button><i className="glyphicon glyphicon-search" /></button>
									</form>
								</div>
								<div className="col-xl-4 col-lg-5">
									<div className="user-panel" style={{
										marginTop: '11px',
										marginLeft: '22px'
									}}>
										{links}
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
								<li><Link to="/feedback" className="nav-link"> About us</Link></li>
								<li><Link to="/poststatus">Post</Link></li>
								<li><Link to="/ewrw">Event</Link>
									<ul className="sub-menu">
										<li><Link to="/ffwef">Donate Clother</Link></li>
										<li><Link to="/erwe">Donate Food</Link></li>
										<li><Link to="/rweew ">Donate Books</Link></li>
									</ul>
								</li>
								<li><a href="/kk">Pages</a>
									<ul className="sub-menu">
										<li><Link to="./product.html">Product Page</Link></li>
										<li><Link to="./category.html">Category Page</Link></li>
										<li><Link to="./cart.html">Cart Page</Link></li>
										<li><Link to="./checkout.html">Checkout Page</Link></li>
										<li><Link to="./contact.html">Contact Page</Link></li>
									</ul>
								</li>
								
								<li><a href="/kk">Account</a>
									<ul className="sub-menu">
										<li><Link to="./product.html">Profile</Link></li>
										<li><Link to="/poststatus" className="nav-link">Post status</Link> </li>
										<li><Link to="./category.html">Log out Page</Link></li>
										<li><Link to="/feedback" className="nav-link">Contact us</Link> </li>
									</ul>
								</li>
								<li id="profile"><a href="/ll">{profile.initials}</a></li>

							</ul>
						</div>
					</nav>
				</header>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	// console.log(state);
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	};
};

export default connect(mapStateToProps, null)(Header);
