import React, { Component } from 'react';
import Aside from './../layout/aside'
import Header from './../layout/header'
import Form from './form';

export default class addUser extends Component {

    render() {
        return (
            <div>
                <section id="container" >
                    <Header />
                    <Aside />
                </section>
                <section id="main-content">
                    <section className="wrapper">
                        <br /><br />
                         <Form/>
                    </section>

                </section>





            </div >
        );
    }


}