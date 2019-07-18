import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        const {profile} = this.props;
        return (
            <div>
                <header className="header dark-bg">
                    <Link to="/admin" className="logo">DA NANG   <span className="lite">VOLUNTEERING</span></Link>

                    <a href="/admin" className="logo" style={{float:'right', marginRight:'450px'}}>{profile.firstName} {profile.lastName}  </a>
                </header>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		profile: state.firebase.profile
	};
};

export default connect(mapStateToProps, null)(Header);

