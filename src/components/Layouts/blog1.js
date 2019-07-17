import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {connect} from 'react-redux';

class Blog1 extends Component {

    render() {
        var { post } = this.props;
        return (
            <React.Fragment>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="latest-news-wrap">
                        <div className="news-img">

                            <img src={post.event_image} className="img-responsive" alt="ok" style={{ width: '100%', height: '510px' }} />
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
                            <p> {post.description} </p><br />
                            <Link to={`/detail/${post.id}`}>Read more ...</Link>

                        </div>
                    </div>
                </div>



            </React.Fragment>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default compose(
    mapStateToProps,
    firestoreConnect([
        { collection: 'posts' }
    ])
)
    (Blog1);