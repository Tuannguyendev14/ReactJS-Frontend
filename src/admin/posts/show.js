import React, { Component } from 'react';
import Aside from './../layout/aside'
import Header from './../layout/header'
import { Link } from 'react-router-dom';
import callApi from './../../utils/apiCaller';


export default class showPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: []
        };
    }

    componentDidMount() {
        var { match } = this.props;
        console.log(match);
        if (match) {
            var id = match.params.id;
            callApi(`posts/${id}`, 'GET', null).then(res => {
                var data = res.data;
                this.setState({
                    post: data
                });
            });
        }
    }

    render() {
        var { post } = this.state;

        return (

            <div>
                <section id="container">
                    <Header />
                    <Aside />
                </section>
                <section id="main-content">
                    <section className="wrapper">
                        <div className="container ">
                            <div className="row">
                                <div className="  col-sm-3  "></div>
                                <div className="col-md-7">
                                    <div className="page-header">
                                        <h1>Post's detail </h1>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>User name:</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3> {post.user_name} </h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Phone number</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3> {post.phone_number}</h3>
                                            <h3> </h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3> Event name</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3 className="form-control-static"> {post.event_name}</h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Image</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <img src={post.event_image} alt="d" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Nu_participant</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3 className="form-control-static"> {post.nu_participant}</h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Venue</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3 className="form-control-static"> {post.venue}</h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Description</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3 className="form-control-static"> {post.description}</h3>
                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="row">
                                        <div className=" col-sm-1 "></div>
                                        <div className=" col-sm-2 ">
                                            <Link to="/posts">
                                                <button className="btn btn-primary btn-lg btn-block" type="button"> <span
                                                    className="glyphicon glyphicon-backward"> Back</span> </button>
                                            </Link>
                                        </div>
                                        <div className="  col-sm-2 ">
                                            <Link  to={`/post/${post.id}/edit`}>
                                                <button className="btn btn-success btn-lg btn-block" type="button" value="Reset"> <span
                                                    className="glyphicon glyphicon-edit">Edit</span></button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="  col-sm-1  "></div>
                            </div>


                        </div>


                    </section>

                </section>
            </div>
        );
    }
}