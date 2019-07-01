import React, { Component } from 'react';
import Aside from './../layout/aside'
import Header from './../layout/header'
import Thumbanail from './../layout/thumbanail';
import Control from './../layout/control';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import apiCaller from './../../utils/apicaller';

class indexPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        apiCaller('posts', 'GET', null).then(res => {
            this.setState = ({
                posts: res.data
            });
        });
    }
    render() {
        console.log('render');

        // var {posts} = this.props ;
        var { posts } = this.state;

        var results = posts.map((post, index) => {
            var result = null;
            if (posts.length > 0) {
                result = <Thumbanail key={index} index={index}
                    post={post} />
            }
            return result;
        });


        return (

            <div>
                <section id="container">
                    <Header />
                    <Aside />
                </section>
                <section id="main-content">
                    <section className="wrapper">

                        <center>
                            <h1>List of Posts</h1>
                        </center><br />

                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <Link to="/addPost">
                                    <button type="button" className="btn btn-success btn-lg " style={{ marginLeft: '0px' }}><span className="glyphicon glyphicon-plus"></span> Add new post</button>

                                </Link>
                            </div>

                            <div className="col-xs-11 col-sm-11 col-md-11 col-lg-8">
                                <Control />
                            </div>
                        </div>

                        <div className="row">
                            {results}


                        </div>

                    </section>

                </section>





            </div>
        );
    }


}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, null)(indexPost);