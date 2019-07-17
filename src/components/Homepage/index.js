import React, { Component, Fragment } from 'react';
import Header from './../Layouts/header';
import Slide from './../Layouts/slide';
import Caption from './../Layouts/caption';
import Footer from './../Layouts/footer';
import Content from './../Layouts/content';
import * as actions from './../../actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Index extends Component {

	logout = () => {
		this.props.onsignOut();
	}

	render() {
		const { auth } = this.props;
		if (!auth.uid) return <Redirect to='/login' />

		return (
			<Fragment>
				<Header logout={this.logout} />
				<Slide />
				<Caption />
				<div className="row" >
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
						<div className="container-fluid">
							<Content />
						</div>
					</div>
				</div>
				<br /><br />
				<Footer />
			</Fragment>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		authError: state.auth.authError,
		auth: state.firebase.auth
	};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		onsignOut: () => {
			dispatch(actions.signOut());
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);