import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';

class Aside extends Component {

    logout = () => {
        this.props.onsignOut();
    }

    render() {
        return (
            <aside>
                <div id="sidebar" className="nav-collapse ">
                    <ul className="sidebar-menu">
                        <li className='active'>
                            <Link to='/posts' className="my-link">
                                <span> Manage status</span>
                            </Link>
                        </li>

                        <li className='sub-menu'>
                            <Link to='/users' className="my-link">
                                <span> Manage users</span>
                            </Link>
                        </li>

                        <li className='sub-menu'>
                            <Link to='/feedbacks' className="my-link">
                                <span> Manage Feedback</span>
                            </Link>
                        </li>

                        <li className='active'>
                            <Link to='/signup' onClick={this.logout} className="my-link">
                                <span> Log out</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onsignOut: () => {
            dispatch(actions.signOut());
        }
    }
}

export default connect(null, mapDispatchToProps)(Aside);