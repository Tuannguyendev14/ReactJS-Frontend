import React, { Component } from 'react';
import Aside from './../layout/aside'
import Header from './../layout/header'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';
import moment from 'moment';

class showFeedback extends Component {

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onReadFeedback(id);
        }
    }

    onDelete = (id) => {
        this.props.onDeleteFeedback(id);
        console.log("ok");
    }

    render() {
        var { feedback } = this.props;

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
                                <h1 style={{ fontFamily: ' time new roman', color: 'blue' }}> {feedback.subject} </h1>
                            </div></center>
                            <div className="row">
                                <div className="  col-sm-3  "></div>
                                <div className="col-md-7">

                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Id:</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3> {feedback.id} </h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>User name</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3> {feedback.user_name}</h3>
                                            <h3> </h3>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Email</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3> {feedback.user_email}</h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Description</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3 className="form-control-static"> {feedback.message}</h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>createdAt</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3 className="form-control-static"> { moment(feedback.createdAt).calendar()}</h3>
                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="row">
                                        <div className=" col-sm-2 "></div>
                                        <div className=" col-sm-2 ">
                                            <Link to="/feedbacks">
                                                <button className="btn btn-primary btn-lg btn-block" type="button"> <span
                                                    className="glyphicon glyphicon-backward">Back</span> </button>
                                            </Link>
                                        </div>
                                        <div className="  col-sm-2 ">
                                            <button className="btn btn-danger btn-lg btn-block" type="button" onClick={() => this.onDelete(feedback.id)} > <span
                                                className="glyphicon glyphicon-trash">Delete</span></button>
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

const mapStateToProps = (state) => {
    return {
        feedback: state.feedback
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onReadFeedback: (id) => {
            dispatch(actions.actReadFeedbackRequest(id));
        },
        onDeleteFeedback: (id) => {
            dispatch(actions.actDeleteFeedbackRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(showFeedback);