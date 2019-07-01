import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default class Detail extends Component {

    render() {
        return (
            <div>
                <Header />
                {/* Page info */}
                <div className="page-top-info">
                    <div className="container">
                        <h4>Category PAge</h4>
                        <div className="site-pagination">
                            <a href>Home</a> /
              <a href>Shop</a>
                        </div>
                    </div>
                </div>
                
                <section className="product-section">
                    <div className="container">
                         
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="product-pic-zoom">
                                    <img className="product-big-img" style={{width:'600px'}} src="img/tenan/lulut.jfif" alt="ok" />
                                </div>
                                 
                            </div>
                            <div className="col-lg-6 product-details">
                                <h2 className="p-title">Xóa đói giảm nghèo tại Đà Nẵng</h2>
                                <h3 className="p-price">29-06-2019</h3>
                                <h4 className="p-stock">Time : <span>08:00 AM -> 17:00 PM</span></h4>
                                 
                                
                                <Link to="/join" className="site-btn">JOIN NOW</Link>
                                <div id="accordion" className="accordion-area">
                                    <div className="panel">
                                        <div className="panel-header" id="headingOne">
                                            <button className="panel-link active" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">information</button>
                                        </div>
                                        <div id="collapse1" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="panel-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integer bibendum sodales arcu id te mpus. Ut consectetur lacus leo, non scelerisque nulla euismod nec.</p>
                                                <p>Approx length 66cm/26" (Based on a UK size 8 sample)</p>
                                                <p>Mixed fibres</p>
                                                <p>The Model wears a UK size 8/ EU size 36/ US size 4 and her height is 5'8"</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel">
                                        <div className="panel-header" id="headingTwo">
                                            <button className="panel-link" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">Sponsors </button>
                                        </div>
                                        <div id="collapse2" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div className="panel-body">
                                                <img src="./img/cards.png" alt="ok" />
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integer bibendum sodales arcu id te mpus. Ut consectetur lacus leo, non scelerisque nulla euismod nec.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel">
                                        <div className="panel-header" id="headingThree">
                                            <button className="panel-link" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">Members</button>
                                        </div>
                                        <div id="collapse3" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div className="panel-body">
                                                <h4>7 Days Returns</h4>
                                                <p>Cash on Delivery Available<br />Home Delivery <span>3 - 4 days</span></p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integer bibendum sodales arcu id te mpus. Ut consectetur lacus leo, non scelerisque nulla euismod nec.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="social-sharing">
                                    <a href><i className="fa fa-google-plus" /></a>
                                    <a href><i className="fa fa-pinterest" /></a>
                                    <a href><i className="fa fa-facebook" /></a>
                                    <a href><i className="fa fa-twitter" /></a>
                                    <a href><i className="fa fa-youtube" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                 
                <Footer />
            </div>
        );
    }
}