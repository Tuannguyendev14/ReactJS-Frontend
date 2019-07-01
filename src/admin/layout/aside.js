import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

export default class Aside extends Component {

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
                            <Link to='/dsfffwef' className="my-link">
                                <span> Manage Feedback</span>
                            </Link>
                        </li>
                        <li className='active'>
                            <Link to='/ffwe' className="my-link">
                                <span> Log out</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </aside>
        );
    }
}


