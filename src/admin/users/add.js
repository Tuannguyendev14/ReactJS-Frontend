import React, { Component } from 'react';
import Aside from './../layout/aside'
import Header from './../layout/header'


export default class addUser extends Component {

    render() {
        return (
            <body>
                <section id="container" >
                    <Header />
                    <Aside />
                </section>
                <section id="main-content">
                    <section className="wrapper">
                        <br /><br />
                        <center><h1>Create new user </h1></center>
                        <div>
                            <section className="wrapper">
                                <div className="container" style={{ marginTop: '20px', fontFamily: 'initial', fontSize: '18px' }}>
                                    
                                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    </div>
                                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                        <form action=" #" >
                                             
                                            <div className="row">
                                                <div className=" col-sm-4  ">
                                                    <label>First name</label>
                                                </div>
                                                <div className="  col-sm-8 contact-form  ">
                                                    <input type="text" className="form-control" name="txtName" placeholder="First name" required /><br />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="  col-sm-4  ">
                                                    <label> Middle name: </label>
                                                </div>
                                                <div className=" col-sm-8 contact-form   ">
                                                    <input type="text" className="form-control" name="code" placeholder=" Middle name:" required /><br />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="  col-sm-4  ">
                                                    <label> Last name: </label>
                                                </div>
                                                <div className=" col-sm-8 contact-form  ">
                                                    <input type="text" className="form-control" name="code" placeholder=" Last name:" required /><br />
                                                </div>
                                            </div>
                                             
                                            
                                            <div className="row">
                                                <div className=" col-sm-4  ">
                                                    <label> Date of birth: </label>
                                                </div>
                                                <div className="  col-sm-8  contact-form   ">
                                                    <input type="date" className="form-control" name="txtPrice" placeholder="Date of birth:"   required /><br />
                                                </div>
                                            </div>
                                             
                                             
                                            <div className="row">
                                                <div className="  col-sm-4  ">
                                                </div>
                                                <div className=" col-sm-2 ">
                                                    <button className="btn btn-primary btn-lg btn-block" type="submit" name="addProduct">Add </button>
                                                </div>
                                                <div className="  col-sm-2 ">
                                                    <button className="btn btn-primary	 btn-lg btn-block" type="reset" value="Reset">Reset</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </section>
                            <div className="text-right">
                                <div className="credits">
                                    <a href="https://bootstrapmade.com/">Create </a> by <a href="https://www.linkedin.com/in/nguyen-huu-tuan-42b67b179/">Nguyễn Hữu Tuấn </a> 
                                </div>
                            </div>
                        </div>
                    </section>

                </section>





            </body >
        );
    }


}