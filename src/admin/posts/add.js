import React, { Component } from 'react';
import Aside from './../layout/aside'
import Header from './../layout/header'
import Form from './form';

export default class addPost extends Component {

    render() {

        var { history, match } = this.props;
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
        }

        const title = id ? <h1 style={{ color: '#0722f7' }}> Update information</h1> : <h1 style={{ color: 'red' }}>Create new event</h1>

        return (
            <div>
                <section id="container" >
                    <Header />
                    <Aside />
                </section>

                <section id="main-content">
                    <section className="wrapper">
                        <br /><br />
                        <center>{title}</center>
                        <Form history={history} match={match} />
                    </section>
                </section>
            </div >
        );
    }
}