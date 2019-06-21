import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

    render() {
        return (
            <div>
                <section className="product-filter-section">
                    <div className="container">
                        <div className="section-title">
                            <h2>BROWSE TOP SELLING PRODUCTS</h2>
                        </div>
                         
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="product-item">
                                    <div className="pi-pic">
                                        <img src="./img/product/5.jpg" alt />
                                        <div className="pi-links">
                                            <a href="#" className="add-card"><i className="flaticon-bag" /><span>ADD TO CART</span></a>
                                            <a href="#" className="wishlist-btn"><i className="flaticon-heart" /></a>
                                        </div>
                                    </div>
                                    <div className="pi-text">
                                        <h6>$35,00</h6>
                                        <p>Flamboyant Pink Top </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="product-item">
                                    <div className="pi-pic">
                                        <div className="tag-sale">ON SALE</div>
                                        <img src="./img/product/6.jpg" alt />
                                        <div className="pi-links">
                                            <a href="#" className="add-card"><i className="flaticon-bag" /><span>ADD TO CART</span></a>
                                            <a href="#" className="wishlist-btn"><i className="flaticon-heart" /></a>
                                        </div>
                                    </div>
                                    <div className="pi-text">
                                        <h6>$35,00</h6>
                                        <p>Black and White Stripes Dress</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="product-item">
                                    <div className="pi-pic">
                                        <img src="./img/product/7.jpg" alt />
                                        <div className="pi-links">
                                            <a href="#" className="add-card"><i className="flaticon-bag" /><span>ADD TO CART</span></a>
                                            <a href="#" className="wishlist-btn"><i className="flaticon-heart" /></a>
                                        </div>
                                    </div>
                                    <div className="pi-text">
                                        <h6>$35,00</h6>
                                        <p>Flamboyant Pink Top </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="product-item">
                                    <div className="pi-pic">
                                        <img src="./img/product/8.jpg" alt />
                                        <div className="pi-links">
                                            <a href="#" className="add-card"><i className="flaticon-bag" /><span>ADD TO CART</span></a>
                                            <a href="#" className="wishlist-btn"><i className="flaticon-heart" /></a>
                                        </div>
                                    </div>
                                    <div className="pi-text">
                                        <h6>$35,00</h6>
                                        <p>Flamboyant Pink Top </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="product-item">
                                    <div className="pi-pic">
                                        <img src="./img/product/9.jpg" alt />
                                        <div className="pi-links">
                                            <a href="#" className="add-card"><i className="flaticon-bag" /><span>ADD TO CART</span></a>
                                            <a href="#" className="wishlist-btn"><i className="flaticon-heart" /></a>
                                        </div>
                                    </div>
                                    <div className="pi-text">
                                        <h6>$35,00</h6>
                                        <p>Flamboyant Pink Top </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="product-item">
                                    <div className="pi-pic">
                                        <img src="./img/product/10.jpg" alt />
                                        <div className="pi-links">
                                            <a href="#" className="add-card"><i className="flaticon-bag" /><span>ADD TO CART</span></a>
                                            <a href="#" className="wishlist-btn"><i className="flaticon-heart" /></a>
                                        </div>
                                    </div>
                                    <div className="pi-text">
                                        <h6>$35,00</h6>
                                        <p>Black and White Stripes Dress</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="product-item">
                                    <div className="pi-pic">
                                        <img src="./img/product/11.jpg" alt />
                                        <div className="pi-links">
                                            <a href="#" className="add-card"><i className="flaticon-bag" /><span>ADD TO CART</span></a>
                                            <a href="#" className="wishlist-btn"><i className="flaticon-heart" /></a>
                                        </div>
                                    </div>
                                    <div className="pi-text">
                                        <h6>$35,00</h6>
                                        <p>Flamboyant Pink Top </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="product-item">
                                    <div className="pi-pic">
                                        <img src="./img/product/12.jpg" alt />
                                        <div className="pi-links">
                                            <a href="#" className="add-card"><i className="flaticon-bag" /><span>ADD TO CART</span></a>
                                            <a href="#" className="wishlist-btn"><i className="flaticon-heart" /></a>
                                        </div>
                                    </div>
                                    <div className="pi-text">
                                        <h6>$35,00</h6>
                                        <p>Flamboyant Pink Top </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center pt-5">
                            <button className="site-btn sb-line sb-dark">LOAD MORE</button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}


