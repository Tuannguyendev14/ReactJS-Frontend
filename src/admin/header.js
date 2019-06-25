import React, { Component } from 'react';


export default class Header extends Component {
    render() {
        return (
            <div>
                <header class="header dark-bg">
                    <div class="toggle-nav">
                        <div class="icon-reorder tooltips" data-original-title="Toggle Navigation" data-placement="bottom"> </div>
                    </div>
                    
                    <a href="admin.php" class="logo">DA NANG   <span class="lite">VOLUNTEERING</span></a>

                        <div class="top-nav notification-row">

                        <ul class="nav pull-right top-menu">


                            <li id="task_notificatoin_bar" class="dropdown" />

                        </ul>

                    </div>
                </header>
            </div>
        );
    }
}
