import React, { Component } from 'react';
import { Link , Redirect} from 'react-router-dom';
import { PostData } from './../../service/PostData';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect :false 
        };
    }

    login = () => {
        if (this.state.email && this.state.password) {
            PostData('login', this.state).then((result) => {
                let responseJSON = result;
                if (responseJSON.email) {
                    sessionStorage.setItem('userData', responseJSON);
                    this.setState({redirect:true});
                    console.log("home");
                } else {
                    console.log("Login error");
                }
            });
        } else {

        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }



    render() {

        if(this.state.redirect){
            return (<Redirect to = {'/'}/>);
        }

        return (
            <div className="body">
                <div className="box">
                    <h1>Login</h1>

                    <form>
                        <div className="inputBox">
                            <input type="email" name="email" required=" " onChange={this.onChange} />
                            <label>User Name</label>
                        </div>
                        <div className="inputBox">
                            <input type="password" name="password" required=" " onChange={this.onChange} />
                            <label>Password</label>
                        </div>
                        <input type="submit" name="" value="Login" onClick={this.login} />

                        <center>
                            <br />
                            <p style={{ color: 'red', fontWeight: 'bold', fontSize: '18px' }}>Don't have an account?  <Link to="/signup" className="nav-link">Sign up now</Link></p>

                        </center>
                    </form>

                </div>
            </div>

        );
    }
}