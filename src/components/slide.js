import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Slide extends Component {

    render() {
        return (
            <div className="row" >
                <div style={{ position: 'relative' , width: '100%', height:'75vh'}} id="contain">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <div style={{ position: 'relative', height: '80vh', width: '100%' }} className="carousel-inner">
                            <div className="item active">
                                <img src="https://fortunedotcom.files.wordpress.com/2015/03/nustar-energy-2.jpg" className="d-block w-100" style={{ width: '100%' }} />
                                <div className="carousel-caption">
                                    <h2>TISSOT TRADITION 5.5</h2>
                                </div>
                            </div>
                            
                            <div className="item">
                                <img src="https://fortunedotcom.files.wordpress.com/2017/02/intuit-volunteers.jpg" className="d-block w-100" style={{ width: '100%' }} />
                                <div className="carousel-caption">
                                    <h2>TISSOT T-TOUCH</h2>
                                </div>
                            </div>
                            <div className="item">
                                <img src="https://image.shutterstock.com/image-photo/group-volunteer-sprout-growing-600w-610533473.jpg" className="d-block w-100" style={{ width: '100%' }} />
                                <div className="carousel-caption">
                                    <h2>TISSOT T-RACE 2.5</h2>
                                </div>
                            </div>
                            <div className="item">
                                <img src="https://image.shutterstock.com/image-photo/closeup-diverse-people-joining-their-600w-1331744636.jpg" className="d-block w-100" style={{ width: '100%' }} />
                                <div className="carousel-caption">
                                    <h2>TISSOT T-RACE 2.5</h2>
                                </div>
                            </div>
                            <ol className="carousel-indicators ">
                                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                                <li data-target="#myCarousel" data-slide-to={1} />
                                <li data-target="#myCarousel" data-slide-to={2} />
                                <li data-target="#myCarousel" data-slide-to={3} />
                            </ol>
                        </div>
                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div >
        );
    }
}


