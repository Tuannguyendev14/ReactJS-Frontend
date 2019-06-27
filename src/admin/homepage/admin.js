import React, { Component } from 'react';
import Aside from './../layout/aside';
import Header from './../layout/header'
import Slide from './../../components/slide';


export default class indexTrip extends Component {

    render() {
        return (
            <div>
                <section id="container" >
                    <Header />
                    <Aside />
                </section>
                <section id="main-content">
                    <section className="wrapper">
                    <br/><br/>
                        <Slide/>
                        
                    </section>

                </section>
            </div >
        );
    }


}

