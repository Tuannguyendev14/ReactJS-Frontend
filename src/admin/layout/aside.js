import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {


    render() {
        return (
            <div>
                <aside>
                    <div id="sidebar" className="nav-collapse ">

                        <ul className="sidebar-menu">
                            <li className="active">
                                <Link to="/indexPost">
                                    <span>Manage status</span>
                                </Link>
                            </li>
                            <li className="sub-menu">
                                <Link to="/indexUser" className>
                                    <span>Manage users</span>
                                </Link>
                            </li>
                            <li className="sub-menu">
                                <Link to="select.php" className>
                                    <span>Update Product</span>
                                </Link>
                            </li>
                            <li className="sub-menu">
                                <Link to="manage_cus.php" className>
                                    <span>Magane order</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="manage_feedback.php" className>
                                    <span>Manage Feedback</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="logout.php">
                                    <span>Log out</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        );
    }


}
