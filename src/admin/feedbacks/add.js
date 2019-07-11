import React, { Component } from 'react';
import Aside from './../layout/aside'
import Header from './../layout/header'
import Form from './form';


export default class addPost extends Component {



    render() {
        var { history, match } = this.props;
        return (
            <div>
                <section id="container" >
                    <Header />
                    <Aside />
                </section>
                <section id="main-content">
                    <section className="wrapper">
                        <br /><br />
                        <center><h1>Create new post</h1></center>
                        <Form history={history} match={match}/>
                    </section>

                </section>





            </div >
        );
    }


}