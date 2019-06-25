import React, { Component } from 'react';





export default class App extends Component {


    render() {
        return (
            <div>
                <aside>
                    <div id="sidebar" className="nav-collapse ">

                        <ul className="sidebar-menu">
                            <li className="active">
                                <a className href="manage_user.php">
                                    <span>Manage status</span>
                                </a>
                            </li>
                            <li className="sub-menu">
                                <a href="giaodien.php" className>
                                    <span>Add Product</span>
                                </a>
                            </li>
                            <li className="sub-menu">
                                <a href="select.php" className>
                                    <span>Update Product</span>
                                </a>
                            </li>
                            <li className="sub-menu">
                                <a href="manage_cus.php" className>
                                    <span>Magane order</span>
                                </a>
                            </li>
                            <li>
                                <a href="manage_feedback.php" className>
                                    <span>Manage Feedback</span>
                                </a>
                            </li>
                            <li>
                                <a className href="logout.php">
                                    <span>Log out</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        );
    }


}
