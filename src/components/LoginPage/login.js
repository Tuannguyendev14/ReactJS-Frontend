import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../../Config/fire';

export default class Login extends Component {

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

    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
        });
    }

    signup = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
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
                            <button type="submit" class="btn btn-primary btn-lg" onClick={this.login}>Login</button>
                            <button type="button" class="btn btn-danger btn-lg" onClick={this.signup}>Sign up</button>
                            {/* <input type="submit" value="Login" onClick={this.login} /> */}
                        </center>
                        <center>
                            <br />
                            <p style={{ color: 'red', fontWeight: 'bold', fontSize: '18px' }}>Don't have an account?
                    <Link to="/signup" className="nav-link">Sign up now</Link>
                            </p>
                        </center>
                    </form>
                </div>
            </div>
        );
    }
}