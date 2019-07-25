import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default class Blog extends Component {

    render() {
        var { post } = this.props;
        return (
            <React.Fragment>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0s"
                    data-wow-interaion={1}>
                    <div className="latest-news-wrap"><br />
                        <h3 style={{ marginLeft: '15px', color: '#272b2a' }}> {post.postedBy} has just posted a status </h3><br />

                        <div className="news-img">
                            <img src={post.event_image || 'https://via.placeholder.com/400x350'} className="img-responsive" alt="ok" style={{ width: '100%', height: '510px' }} />
                            <div className="deat">
                                <span>{post.startDay}</span>
                            </div>
                        </div>
                        <div className="news-content">
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-linkedin"></i>
                            <i className="fa fa-youtube"></i>
                            <i className="fa fa-whatsapp"></i>
                            <h4 style={{ float: 'right' }}> {moment(post.createdAt).calendar()}</h4>

                            <center>
                                <h3> {post.event_name} </h3><br />
                                <Link to={`/detail/${post.id}`}>Read more ...</Link>
                            </center>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>


                {/* <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="latest-news-wrap">
                        <div className="news-img">

                            <img src="img/blogs/tnh3.jpg" className="img-responsive" alt="ok" />
                            <div className="deat">
                                <span>29</span>
                                <span>June</span>
                            </div>
                        </div>
                        <div className="news-content">
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-linkedin"></i>
                            <i className="fa fa-youtube"></i>
                            <i className="fa fa-whatsapp"></i>
                            <p>
                                Sắp đến Hope Đà Nẵng tuyển TNV cho chương trình "Xuân Về A riêu " 2018 .. hãy xem hết
                                ảnh và video nhé rồi hãy like .... Hiểu về sự khó khăn của Ariêu và cái khổ khi tham gia
                                Hope thì hay đăng kí tham gia nhé... Chúng tớ cần những ae có ý chí và tinh thần vì cộng
                                đồng.
                                Không phải đi để trải nghiệm mà đi để thấu hiểu.
                                "Chăm sóc - Yêu thương - Chia sẻ"
                                    </p><br />
                            <a href="/kkk">Read more...</a>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="latest-news-wrap">
                        <div className="news-img">

                            <img src="img/blogs/tnh2.jpg" className="img-responsive" alt="ok" />

                            <div className="deat">
                                <span>30</span>
                                <span>June</span>
                            </div>
                        </div>
                        <div className="news-content">
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-linkedin"></i>
                            <i className="fa fa-youtube"></i>
                            <i className="fa fa-whatsapp"></i>
                            <p> <b>THƯ NGỎ!</b> <br />
                                TRẺ EM - là niềm hy vọng, là mầm xanh của đất nước và cũng là những hứa hẹn của nhân
                                loại. Trẻ em là để yêu thương,
                                bảo vệ, là để thoả sức chơi đùa với thế giới đầy mới mẻ này. Trẻ em cũng là nơi nhận
                                những điều tốt đẹp nhất từ
                                gia đình và xã hội.
                            </p><br />
                            <a href="/ll">Read more...</a>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="latest-news-wrap">
                        <div className="news-img">

                            <img src="img/blogs/tnh5.jpg" className="img-responsive" alt="ok" />

                            <div className="deat">
                                <span>31</span>
                                <span>June</span>
                            </div>
                        </div>
                        <div className="news-content">
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-linkedin"></i>
                            <i className="fa fa-youtube"></i>
                            <i className="fa fa-whatsapp"></i>
                            <p> <b>[THÔNG BÁO OFFLINE CLB]</b><br />
                                📣📣Các bạn ơi!!!📣📣<br />
                                Có lẽ chúng mình nghỉ ngơi đủ lâu rồi nhỉ, phải quay lại công việc và tiếp tục thực hiện
                                sứ mệnh của mình thôi nào! 🔥🔥🔥
                                Đừng quên tuần này chúng mình có hẹn cùng HOPE nha😍😍😍


                            </p><br />
                            <a href="/ll">Read more...</a>
                        </div>
                    </div>
                </div> */}

            </React.Fragment>

        );
    }
}