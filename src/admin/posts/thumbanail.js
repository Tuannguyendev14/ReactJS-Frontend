import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Thumbanail extends Component {

    onDelete = (id) => {
        var { post } = this.props;
        if (confirm('Are you sure to delete ?')) { //eslint-disable-line
            this.props.onDelete(id);
            alert(post.event_name + ' has successfully been deleted');
        }
    }

    render() {

        var { post } = this.props;

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 my-padding-bottom-19   ">
                <div className="my-frame">
                    <div className="my-padding-bottom-12  ">
                        <h2 className="mr-bot">{post.event_name}</h2>
                    </div>
                    <div className="d-flex flex-wrap">
                        <div className="my-padding-right-8 my-padding-bottom-8  ">
                            <Link to={`/show/${post.id}`}>
                                <button type="button" className="btn btn-success mr-10"><span
                                    className="glyphicon glyphicon-eye-open"> Detail</span></button>
                            </Link>
                        </div>
                        <div className="my-padding-right-8 my-padding-bottom-8  ">
                            <Link to={`/post/${post.id}/edit`}>
                                <button type="button" className="btn btn-primary mr-10">
                                    <span className="glyphicon glyphicon-edit"> Edit</span></button>
                            </Link>
                        </div>
                        <div className="my-padding-right-8 my-padding-bottom-8 ">
                            <Link to="/posts">
                                <button type="button" className="btn btn-danger mr-10">
                                    <span className="glyphicon glyphicon-trash" onClick={() => this.onDelete(post.id)}> Delete</span></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}