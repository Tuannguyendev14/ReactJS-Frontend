import React, { Component } from 'react';
import Aside from './../layout/aside';
import Header from './../layout/header'
import Slide from './../../components/Layouts/slide';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class indexTrip extends Component {

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/login' />
        return (
            <div>

                <section id="container" >
                    <Header />
                    <Aside />
                </section>
                
                <section id="main-content">
                    <section className="wrapper">
                        <br /><br />
                        <Slide />
                    </section>
                </section>

            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    };
};

export default connect(mapStateToProps, null)(indexTrip);
