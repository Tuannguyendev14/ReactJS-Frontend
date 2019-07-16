import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Config/fire';
import * as actions from './../../actions/index';
import { connect } from 'react-redux';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onsignIn = (e) => {
        e.preventDefault();
        var user  = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.onsignIn(user);

        
    }

    // signup = (e) => {
    //     e.preventDefault();
    //     firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    render() {
        const {authError} = this.props;
        return (
            <div className="body">
                <div className="box">
                    <h1>Login</h1>
                    <form>
                        <div className="inputBox">
                            <input type="email" name="email" required=" " value={this.state.email} onChange={this.handleChange} />
                            <label>Email</label>
                        </div>
                        <div className="inputBox">
                            <input type="password" name="password" required=" " value={this.state.password}
                                onChange={this.handleChange} />
                            <label>Password</label>
                        </div>
                        <center>
                            <button type="submit" className="btn btn-primary btn-lg" onClick={this.onsignIn}>Login</button>
                            {/* <button type="button" class="btn btn-danger btn-lg" onClick={this.signup}>Sign up</button>  
                              <input type="submit" value="Login" onClick={this.login} />  */}
                        </center>
                        <center>
                            <br />
                            <p style={{ color: 'red', fontWeight: 'bold', fontSize: '18px' }}>Don't have an account?
                            <Link to="/signup" className="nav-link">Sign up now</Link>
                             {authError? <h4>{authError}</h4> : null} 
                            </p>
                        </center>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onsignIn: (user) => {
            dispatch(actions.signIn(user));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);