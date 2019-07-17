import React, { Component } from 'react';
import * as actions from './../../actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
        if (auth.uid) return <Redirect to='/' />
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
                            <p style={{ color: 'red', fontWeight: 'bold', fontSize: '18px' }}>Already have an account? <Link to="/login">Login here</Link></p>
                            {authError ? <p style={{ color: 'red', fontWeight: 'bold', fontSize: '18px' }}>{authError}</p> : null}
                        </center>
                    </form>

                </div>

            </div>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => {
            dispatch(actions.signUp(newUser));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);