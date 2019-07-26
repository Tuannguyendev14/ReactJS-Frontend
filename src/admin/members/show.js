import React, { Component } from 'react';
import Aside from './../layout/aside'
import Header from './../layout/header'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';
import moment from 'moment';

class showMember extends Component {

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onReadMember(id);
            console.log('ok');
        }
    }

    render() {

        var { member } = this.props;

        return (
            <div>
                <section id="container">
                    <Header />
                    <Aside />
                </section>

                <section id="main-content">
                    <section className="wrapper">
                        <div className="container ">
                            <center> <div className="page-header">
                                <h1 style={{ fontFamily: ' time new roman', color: 'blue' }}> {member.name} </h1>
                            </div></center>
                            <div className="row">
                                <div className="  col-sm-3  "></div>
                                <div className="col-md-7">

                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Email:</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3> {member.email} </h3>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Phone number</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3> {member.phone}</h3>
                                            <h3> </h3>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Address</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3> {member.address}</h3>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Gender</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3> {member.gender}</h3>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Age</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3> {member.age}</h3>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Job</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3> {member.job}</h3>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Created at</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3 className="form-control-static"> {moment(member.createdAt).calendar()}</h3>
                                        </div>
                                    </div>

                                    <br /><br />
                                    <div className="row">
                                        <div className=" col-sm-3 "></div>
                                        <div className=" col-sm-2 ">
                                            <Link to="/members">
                                                <button className="btn btn-primary btn-lg btn-block" type="button"> <span
                                                    className="glyphicon glyphicon-backward"> Back</span> </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-1" />
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        member: state.member
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onReadMember: (id) => {
            dispatch(actions.actReadMemberRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(showMember);