import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from './../../actions/index';

class Signup extends Component {


    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
         this.props.signUp(this.state);
    }

    render() {
        const { auth, authError } = this.props;

        return (
            <div className="body">
                <div className="box">
                    <h1>Register here</h1>

                    <form onSubmit={this.handleSubmit}>
                        <div className="inputBox">
                            <input type="text" id="firstName" onChange={this.handleChange} required=" " />
                            <label>First Name</label>
                        </div>
                        <div className="inputBox">
                            <input type="text" id="lastName" onChange={this.handleChange} required=" " />
                            <label>Last Name</label>
                        </div>
                        <div className="inputBox">
                            <input type="text" id="phoneNumber" onChange={this.handleChange} required=" " />
                            <label>Phone Number</label>
                        </div>
                        <div className="inputBox">
                            <input type="email" id="email" onChange={this.handleChange} required=" " />
                            <label>Email</label>
                        </div>
                        <div className="inputBox">
                            <input type="password" id="password" onChange={this.handleChange} required=" " />
                            <label>Password</label>
                        </div>
                        {/* <div className="inputBox">
                <input type="password" name="" required=" " />
                <label>Confirm Password</label>
            </div> */}
                        <input type="reset" id="btn" name="" value="Reset" />
                        <input type="submit" id="btn" name="" value="Register" />

                        <center><br />
                            <p style={{ color: 'red', fontWeight: 'bold', fontSize: '18px' }}>Already have an account? <a href="/login">Login here</a></p>

                        </center>
                    </form>

                </div>

            </div>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        authReducer: state.authReducer
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        signUp: (newUser) => {
            dispatch(actions.signUp(newUser));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);