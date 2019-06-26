import React, { Component } from 'react';
import Aside from './../layout/aside'
import Header from './../layout/header'
import { Link } from 'react-router-dom';


export default class showPost extends Component {

    render() {
        return (

            <body>
                <section id="container">
                    <Header />
                    <Aside />
                </section>
                <section id="main-content">
                    <section className="wrapper">
                        <div className="container ">
                            <div className="row">
                                <div className="  col-sm-4  "></div>
                                <div className="col-md-6">
                                    <div className="page-header">
                                        <h1>Post's detail </h1>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                            <h3>ID</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            < h3 className="form-control-static"> Id : 1 </h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                            <h3>Name</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3 className="form-control-static">Nguyen Huu Tuan</h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                            <h3>Code</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3 className="form-control-static"> 2321</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br /><br />
                            <div className="row">
                                <div className="  col-sm-4  ">
                                </div>
                                <div className=" col-sm-2 ">
                                    <Link to="/indexPost" ><button className="btn btn-primary btn-lg btn-block" type="button"  >Back  </button></Link>
                                </div>
                                <div className="  col-sm-2 ">
                                    <Link to="#" ><button className="btn btn-success btn-lg btn-block" type="button" value="Reset">Edit</button></Link>
                                </div>
                            </div>
                        </div>


                    </section>

                </section>
            </body >
        );
    }
}