import React, { Component } from 'react';


export default class Signup extends Component {

    render() {
        return (
            <div className="body">
                <div className="box">
                    <h1>Register here</h1>

                    <form>
                        <div className="inputBox">
                            <input type="text" name="firstname" required=" " />
                            <label>First Name</label>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="lastname" required=" " />
                            <label>Last Name</label>
                        </div>
                        <div className="inputBox">
                            <input type="number" name="phonenumber" required=" " />
                            <label>Phone Number</label>
                        </div>
                        <div className="inputBox">
                            <input type="email" name="email" required=" " />
                            <label>Email</label>
                        </div>
                        <div className="inputBox">
                            <input type="password" name="password" required=" " />
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