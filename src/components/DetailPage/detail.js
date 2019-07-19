import React, { Component } from 'react';
import Header from './../Layouts/header';
import Footer from './../Layouts/footer';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';
import Join from './../Joinpage/join';

class Detail extends Component {

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onReadPost(id);
        }
    }

    render() {
        var { post, match } = this.props;

        var elmTaskForm = match ? <Join post={post} match={match} /> : '';

        return (
            <div>
                <Header />
                {/* Page info */}
                <div className="page-top-info">
                    <div className="container">
                        <center>
                            <h1> {post.event_name}  </h1>
                        </center>
                    </div>
                </div>
                <section className="product-section">
                    <div className="row">
                        <div className="col-xs-0 col-sm-0 col-md-0 col-lg-1"></div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                            <div className="product-pic-zoom">
                                <img className="product-big-img" style={{ width: '600px' }} src={post.event_image} alt="ok" />
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5  product-details  ">
                            <h3 className="p-price">{post.startDay} -> {post.endDay}</h3>
                            <h4 className="p-stock">Time : <span>{post.startTime} -> {post.endTime}</span></h4>
                            <div id="accordion" className="accordion-area">
                                <div className="panel">
                                    <div className="panel-header" id="headingOne">
                                        <button className="panel-link" data-toggle="collapse" data-target="#collapse1"
                                            aria-expanded="false" aria-controls="collapse1">Sponsors </button>
                                    </div>
                                    <div id="collapse1" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="panel-body">
                                            <img src="./img/cards.png" alt="ok" />
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so
                                                dales. Phasellus sagittis auctor gravida. Integer bibendum sodales arcu id te mpus.
                                        Ut consectetur lacus leo, non scelerisque nulla euismod nec.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel">
                                    <div className="panel-header" id="headingTwo">
                                        <button className="panel-link" data-toggle="collapse" data-target="#collapse2"
                                            aria-expanded="false" aria-controls="collapse2">Members </button>
                                    </div>
                                    <div id="collapse2" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="panel-body">
                                            <img src="./img/cards.png" alt="ok" />
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so
                                                dales. Phasellus sagittis auctor gravida. Integer bibendum sodales arcu id te mpus.
                                        Ut consectetur lacus leo, non scelerisque nulla euismod nec.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel">
                                    <div className="panel-header" id="headingThree">
                                        <button className="panel-link" data-toggle="collapse" data-target="#collapse3"
                                            aria-expanded="false" aria-controls="collapse3">Description</button>
                                    </div>
                                    <div id="collapse3" className="collapse" aria-labelledby="headingThree"
                                        data-parent="#accordion">
                                        <div className="panel-body">
                                            <h2> Event's description </h2><br />
                                            <h4>{post.description}</h4>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="news-content">
                                <i className="fa fa-facebook"></i>
                                <i className="fa fa-twitter"></i>
                                <i className="fa fa-linkedin"></i>
                                <i className="fa fa-youtube"></i>
                                <i className="fa fa-whatsapp"></i>
                                <a type="buttom" className="site-btn" style={{ marginLeft: '20px' }} data-toggle="modal" data-target="#myModal">JOIN NOW</a>



                                {elmTaskForm}

                            </div>
                        </div>

                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.post
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onReadPost: (id) => {
            dispatch(actions.actReadPostRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);