import React, { Component } from 'react';
import Header from './../Layouts/header';
import Footer from './../Layouts/footer';
import Form from './form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Post  extends Component {

    render() {
        var { history, auth } = this.props;
        if (!auth.uid) return <Redirect to='/login' />
        
        return (
            <div>
               

                <Form history={history} />

               
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    };
};

export default connect(mapStateToProps, null)(Post);
