import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Login extends Component {

render() {
return (
<div className="body">
    <div className="box">
        <h1>Login</h1>

        <form>
            <div className="inputBox">
                <input type="text" name="" required=" " />
                <label>User Name</label>
            </div>
            <div className="inputBox">
                <input type="password" name="" required=" " />
                <label>Password</label>
            </div>
            <input type="submit"  name="" value="Login" />

            <center>
                <br />
                <p style={{color: 'red', fontWeight: 'bold',fontSize:'18px'}}>Don't have an account?  <Link to="/signup" className="nav-link">Sign up now</Link></p>

            </center>
        </form>
         
    </div>
</div>

);
}
}