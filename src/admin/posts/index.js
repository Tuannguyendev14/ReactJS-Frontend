import React, { Component } from 'react';
import Aside from './../layout/aside'
import Header from './../layout/header'
import Thumbanail from './thumbanail';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';

class indexPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: ''
        }
    }

    componentDidMount() {
        this.props.fetchAllPosts();
    }

    onDelete = (id) => {
        this.props.onDeletePost(id);
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var filter = {
            name: name === 'filterName' ? value : this.state.filterName
        };
        this.props.onFilter(filter);
        this.setState({
            [name]: value
        });
    }

    render() {

        var { posts, filter } = this.props;

        if (filter.name) {
            posts = posts.filter((post) => {
                return post.event_name.toLowerCase().indexOf(filter.event_name) !== -1;
            });
            console.log(posts);

        }





        var results = posts.map((post, index) => {
            var result = null;
            if (posts.length > 0) {
                result = <Thumbanail key={index} index={index}
                    post={post} onDelete={this.onDelete} />
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
                                    <button type="button" className="btn btn-success btn-lg " style={{ marginLeft: '10px' }}><span className="glyphicon glyphicon-plus"></span> Add new post</button>
                                </Link>
                            </div>
                            <div className="col-xs-11 col-sm-11 col-md-11 col-lg-8">
                                <input type="text" className="form-control my-filter" name="filterName" placeholder="Filter ...."
                                    style={{ borderRadius: '18px', background: '#f0f0f0', fontSize: '20px' }}
                                    value={this.state.filterName} onChange={this.onChange}
                                />
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
        posts: state.posts,
        filter: state.filter
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllPosts: () => {
            dispatch(actions.actFetchPostsRequest());
        },
        onDeletePost: (id) => {
            dispatch(actions.actDeletePostRequest(id));
        },
        onFilter: (filter) => {
            dispatch(actions.filterPost(filter));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(indexPost);