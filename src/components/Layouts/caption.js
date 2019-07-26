import React, { Component } from 'react';

export default class Header extends Component {
    render() {

        return (
            <div>
                <section className="features-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 p-0 feature">
                                <div className="feature-inner">
                                    <div className="feature-icon">
                                        <img src="img/icons/1.png" alt="#" />
                                    </div>
                                    <h2>Donate Clothers</h2>
                                </div>
                            </div>
                            <div className="col-md-4 p-0 feature">
                                <div className="feature-inner">
                                    <div className="feature-icon">
                                        <img src="img/icons/2.png" alt="#" />
                                    </div>
                                    <h2>Together, We make different</h2>
                                </div>
                            </div>
                            <div className="col-md-4 p-0 feature">
                                <div className="feature-inner">
                                    <div className="feature-icon">
                                        <img src="img/icons/3.png" alt="#" />
                                    </div>
                                    <h2>Help people</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}


