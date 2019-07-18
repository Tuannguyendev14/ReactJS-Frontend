import React, { Component, Fragment } from 'react';
import Header from './../Layouts/header';
import Slide from './../Layouts/slide';
import Caption from './../Layouts/caption';
import Footer from './../Layouts/footer';
import Content from './../Layouts/content';
import * as actions from './../../actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Index extends Component {


    render() {
        var { post , authName, authEmail} = this.props;

        return (

            <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-xl" style={{ float: 'left', marginLeft: '-400px', width: '900px' }}>
                    <div className="modal-content" style={{ background: '#fbe0f6' }}>
                        <div className="modal-header">
                            <center>
                                <h2 className="modal-title" style={{ marginLeft: '120px' }}>Registration for</h2>
                                <h2 style={{ marginLeft: '150px', color: 'red' }}> {post.event_name} </h2>
                            </center>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        <div className="modal-body">

                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            </div>

                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-10">
                                <form className="contact-form" onSubmit={this.onSubmit}>
                                    <input type="text" placeholder="Your name" name="user_name" value={authName.firstName + " " + authName.lastName}  required />
                                    <input type="email" placeholder="Your e-mail" name="user_email" value={authEmail.email} required />
                                    <input type="number" placeholder="Phone number" name="phone_number" required />
                                    <input type="text" placeholder="Address" name="address" required />
                                </form>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success  " data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-warning" data-dismiss="modal">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        authName: state.firebase.profile,
        authEmail: state.firebase.auth
    };
};

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         onsignOut: () => {
//             dispatch(actions.signOut());
//         }
//     }
// }
export default connect(mapStateToProps, null)(Index);