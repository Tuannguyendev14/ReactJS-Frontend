import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 


export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="header dark-bg">
                    <div className="toggle-nav">
                        <div className="icon-reorder tooltips" data-original-title="Toggle Navigation" data-placement="bottom"> </div>
                    </div>

                    <Link to="/admin" className="logo">DA NANG   <span className="lite">VOLUNTEERING</span></Link>

                    <div className="top-nav notification-row">

                        <ul className="nav pull-right top-menu">
                            <li id="task_notificatoin_bar" className="dropdown" />

                        </ul>

                    </div>
                </header>
            </div>
        );
    }
}
