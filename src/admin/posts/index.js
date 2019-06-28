import React, { Component } from 'react';
import Aside from './../layout/aside'
import Header from './../layout/header'
import Thumbanail from './../layout/thumbanail';
import Control from './../layout/control';
import { Link } from 'react-router-dom';

export default class indexPost extends Component {

    render() {

        var posts =[
            {
                id: 1,
                name:'NGuyen huu tuan'
            },
            {
                id: 2,
                name:'NGuyen huu tung'
            },
            {
                id: 3,
                name:'NGuyen huu hung'
            },
            {
                id: 4,
                name:'NGuyen huu dung'
            }
        ]

        var results = posts.map((post, index)=>{
            var result=null;
            if(posts.length >0){
                result = <Thumbanail key ={index} name={post.name}/>
            }
            return result;
        });

        
        return (

            <div>
                <section id="container">
                    <Header />
                    <Aside />
                </section>
                <section id="main-content">
                    <section className="wrapper">
                        <br /><br />
                        <center>
                            <h1>List of Posts</h1>
                        </center><br/>

                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <Link to="/addPost">
                                    <button type="button" className="btn btn-success btn-lg " style={{ marginLeft: '30px' }}><span className="glyphicon glyphicon-plus"></span> Add new post</button>
    
                                </Link>
                            </div>

                            <div className="col-xs-11 col-sm-11 col-md-11 col-lg-8">
                                <Control/>
                            </div>
                        </div>

                        <div className="row">
                            {results}
                             

                        </div>

                    </section>

                </section>





            </div>
        );
    }


}