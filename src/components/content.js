import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Blog from './blog';
import Horizontal from './horizontal';
export default class Header extends Component {

    render() {
        return (
            <div>
                <section className="latest-news-area" id="latest">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="section_title">

                                <h2>Recent <strong>Blogs</strong></h2>
                            </div>
                        </div>
                    </div><br /><br />

                    <div className="row">
                        <div className="news_active">
                            <Blog />
                        </div>
                    </div>
                </section>
                <br /><br />

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  ">
                    <Horizontal />
                    <br />
                </div>


                <div className="  col-xs-12 col-sm-12 col-md-12 col-lg-12 wow bounceInUp" data-wow-duration="2s"
                    data-wow-delay="0s" data-wow-interaion={1} style={{ backgroundColor: '#e3ecec' }}><br /><br /><br /><br />
                    <div className="row">
                        <div className="  col-xs-0 col-sm-0 col-md-1 col-lg-1  "></div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <img src="img/blogs/ttn.jpg" className="img-responsive" />
                        </div>
                        <div className="  col-xs-12 col-sm-12 col-md-5 col-lg-4 news-content " >
                            <br /><br />
                            <h2 style={{ color: 'black', fontWeight: 'bold' }}> 🔔KÊU GỌI ỦNG HỘ TẾT THIẾU NHI 01/06🔔</h2>   <br /><br />
                            <h4 style={{ color: '#4d4748' }}> + 🏵Một năm có 365 ngày, duy chỉ có một ngày gọi là TẾT của thiếu nhi... Vậy mà đâu đây
                            ngay cạnh chúng ta vẫn còn những thiếu nhi không có một ngày TẾT như thế....</h4>  <br />

                            <h4 style={{ color: '#4d4748' }}> + 🏵Thái Niên là xã 135 của huyện Bảo Thắng với chiều dài 15km. Địa bàn rộng với 16 thôn.
                             Trong đó có 8 thôn 100 % đồng bào dân tộc thiểu số sinh sống. 11/16 thôn đặc biệt khó khăn.
                            3 thôn Mom Đào 1, Khe Đền 1, Khe Đền 2 có 100% đồng bào dân tộc Mông sinh sống. Kinh tế còn nghèo nàn khó khăn.
                             Đời sống nhân dân còn nhiều thiếu thốn. Từ trung tâm xã vào mất 4 - 10km đường dốc đá đi lại khó khăn. 3 thôn có tổng số
                             158 hộ. Trong đó có 58 hộ nghèo. Phần đa nhân dân sống nhờ cây lúa và số rừng đồi ít ỏi. 1 số lao động khỏe mạnh bỏ nhà đi làm ăn
                              Trung Quốc.  </h4> <br /><br />
                            <a href="">Read more...</a>
                        </div>
                        <div className="  col-xs-0 col-sm-0 col-md-0 col-lg-1 " ></div>

                    </div><br /><br /><br /><br />
                </div>

                <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-12  wow bounceInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-interaion="1" style={{ marginTop: '30px', marginBottom: '30px' }}  >
                    <div className="row">
                        <div className=" col-xs-0 col-sm-0 col-md-0 col-lg-1   "></div>

                        <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-5   ">
                            <br /><br /><br /><br /><br />
                            <h2 style={{ color: '#f809db', fontWeight: 'bold' }}>Tại sao phải làm tình nguyện ?</h2>
                            <br />
                            <h2 style={{ color: 'black', fontWeight: 'bold' }}>Lý do bạn nên tham gia hoạt động tình nguyện</h2><br />
                            <h4>Tình nguyện là một hoạt động đầy ý nghĩa có ảnh hưởng tích cực đến cộng đồng và xã hội. Nhưng bạn có biết
                             rằng tình nguyện cũng mang lại cho bản thân bạn rất nhiều lợi ích? Dưới đây là một vài lý do bạn nên đi làm tình nguyện. </h4><br />

                            <br /><div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                    <h3>  <p className="glyphicon glyphicon-ok"> </p> Cải thiện sự nghiệp   </h3>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                    <h3> <p className="glyphicon glyphicon-ok"> </p>  Một sở thích mới  </h3>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                    <h3> <p className="glyphicon glyphicon-ok"> </p> Một trải nghiệm mới   </h3>
                              </div>
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                    <h3> <p className="glyphicon glyphicon-ok"> </p> Những kinh nghiệm mới  </h3>
                                </div>
                            </div>
                        </div>
                        <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-5">
                            <img src="img/blogs/tn6.jpg" className="img-responsive" />

                        </div>
                        <div className="  col-xs-0 col-sm-0 col-md-0 col-lg-1 " ></div>
                    </div>
                </div>


                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                    <div className="row">
                        <iframe style={{ width: '100%', height: '800px' }} src="https://www.youtube.com/embed/asbwvNyjRrA" frameBorder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="row " style={{ background: 'gray', height: '150px' }}>
                        <div className="row"></div>
                        <div className="row view">
                            <a href="">Read more...</a>
                        </div>
                    </div>
                </div>



            </div>

        );
    }
}