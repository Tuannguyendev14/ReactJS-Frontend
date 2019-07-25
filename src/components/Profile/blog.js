import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


class Blog extends Component {

    render() {
        var { post } = this.props;
        return (
            <div className="container">

                <div class="col-xs-0 col-sm-0 col-md-0 col-lg-2" />

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                    <div className="latest-news-wrap">
                        <h3 style={{ marginLeft: '15px', color: '#272b2a' }}> {post.postedBy} has just posted a status </h3><br />


                        <div className="news-img">

                            <img src={post.event_image} className="img-responsive" alt="ok"
                                style={{ width: '100%', height: '510px' }} />
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
                            </center>
                        </div>
                        <center>
                            <Link to={`/detail/${post.id}`}>
                                <button type="button" className="btn btn-success mr-10"><span
                                    className="glyphicon glyphicon-eye-open"> Detail</span></button>
                            </Link>

                            <Link to={`/post/${post.id}/edit`}>
                                <button type="button" className="btn btn-primary mr-10">
                                    <span className="glyphicon glyphicon-edit"> Edit</span></button>
                            </Link>

                            <Link to="/posts">
                                <button type="button" className="btn btn-danger mr-10">
                                    <span className="glyphicon glyphicon-trash" onClick={() => this.onDelete(post.id)}> Delete</span></button>
                            </Link>
                        </center>
                        <br />
                    </div>
                    <br /><br /><br />
                </div>
                <div class="col-xs-0 col-sm-0 col-md-0 col-lg-2" />
            </div>
        );
    }
}

export default Blog;