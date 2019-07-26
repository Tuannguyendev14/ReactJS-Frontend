import React, { Component } from 'react';

export default class Slide extends Component {

    render() {

        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={3} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src=" https://fortunedotcom.files.wordpress.com/2017/02/intuit-volunteers.jpg" alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>LET'S JOIN HAND TOGETHER</h1>
                            <h2>TO END EXTRIME POVERTY</h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src=" https://fortunedotcom.files.wordpress.com/2015/03/nustar-energy-2.jpg" alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>LET'S JOIN HAND TOGETHER</h1>
                            <h2>TO END EXTRIME POVERTY</h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="http://www.wastatepta.org/wp-content/uploads/2016/11/Senior-volunteer-helping-African-American-man-register-for-marathon-000065245281_Medium.jpg " alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>LET'S JOIN HAND TOGETHER</h1>
                            <h2>TO END EXTRIME POVERTY</h2>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://static1.squarespace.com/static/5c12b3915417fc6974991ae4/t/5c3760f6aa4a99740a740658/1547133181730/Root-Cause-volunteers.jpg" alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>LET'S JOIN HAND TOGETHER</h1>
                            <h2>TO END EXTRIME POVERTY</h2>
                        </div>
                    </div>

                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}


