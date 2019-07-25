import React, { Component } from 'react';
import Blog from './blog';

import { connect } from 'react-redux';
import * as actions from './../../actions/index';
import Header from './../Layouts/header';
import Footer from './../Layouts/footer';

class Profile extends Component {


    componentDidMount() {
        this.props.fetchAllPosts();
    }

    render() {
        var { posts, profile } = this.props;
        var name = profile.firstName + profile.lastName;

        var results = posts.map((post, index) => {
            var result = null;
            if (posts.length > 0) {
                if (post.postedBy === name) {
                    result = <Blog key={index} index={index}
                        post={post} onDelete={this.onDelete} />
                }
            }
            return result;
        });

        return (
            <div>
                <Header />
                <section className="latest-news-area" id="latest" style={{ background: '#f6ffff' }}>
                    <br />
                    <center>
                        <h2>Recent <strong>Blogs</strong></h2>
                    </center>
                    <br />
                    <div className="container">
                        <div className="news_active">
                            {results}
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
        posts: state.posts,
        profile: state.firebase.profile
        // postFirebases: state.postReducer.posts
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllPosts: () => {
            dispatch(actions.actFetchPostsRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
