import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

render() {
return (
<div>
    <div className="row">

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <section className="product-filter-section">
                <div className="container">
                    <div className="section-title">
                        <h2>BROWSE TOP SELLING PRODUCTS</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="product-item">
                                <div className="pi-pic">
                                    <img src="./img/product/5.jpg" />
                                    <div className="pi-links">
                                        <Link to="/detail" className="add-card"><i className="flaticon-heart" /> Detail
                                        </Link>
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

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  ">
            <div className="progress">
                <div className="progress-bar progress-bar-success" role="progressbar" style={{ width: '40%' }}>
                    <a href="#">Donate cloters</a>
                </div>
                <div className="progress-bar progress-bar-warning" role="progressbar" style={{ width: '20%' }}>
                    <a href="#">Donate food</a>
                </div>
                <div className="progress-bar progress-bar-danger" role="progressbar" style={{ width: '20%' }}>
                    <a href="#">Donate books </a>
                </div>
                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={50} aria-valuemin={0}
                    aria-valuemax={100} style={{ width: '20%' }}>
                    <a href="#">Donate money</a>
                </div>
            </div>
            <br />
        </div>

        <div className="  col-xs-12 col-sm-12 col-md-12 col-lg-12   wow bounceInUp" data-wow-duration="2s"
            data-wow-delay="0s" data-wow-interaion={1} style={{ backgroundColor: '#e3ecec' }}>
            <div className="row">
                <div className="  col-xs-2 col-sm-2 col-md-2 col-lg-1  ">
                </div>

                <div className="col-xs-9   col-sm-9 col-md-9   col-lg-6   ">
                    <a><img src="img/tenan/lulut.jfif " width="400" height="400" /></a>
                </div>
                <div className="  col-xs-12 col-sm-12 col-md-12 col-lg-5  ">
                    <h2 sty le="color: black; font-weight: bold;"> Xóa đói giảm nghèo</h2>
                    <h4 style={{ color: '#4d4748' }}>Xóa đói giảm nghèo</h4>
                    <h4 id="mauchu" />
                    <p id="mauchu"><span className="cacgoi">+ Gói 1 : Uốn (Setting / lạnh/ uốn cup phồng/ uốn gọn to ) +
                            cắt, gội, sấy tạo kiểu.</span></p>
                    <p id="mauchu"><span className="cacgoi">+ Gói 2: Duỗi (Cúp/ thẳng/ tự nhiên) + cắt + gội + sấy tạo
                            kiểu</span></p>
                    <p id="mauchu"><span className="cacgoi">+ Gói 3: Nhuộm (màu tự nhiên/ màu thời trang/ màu phong
                            thủy) + cắt + gội + sấy tạo kiểu</span></p>
                    <p id="mauchu"><span className="cacgoi">+ Gói 4: Phục hồi + cắt + gội + sấy tạo kiểu</span></p>
                </div>

            </div>
        </div>

    </div>





</div>
);
}
}