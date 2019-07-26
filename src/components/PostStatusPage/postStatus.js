import React, { Component } from 'react';
import Header from './../Layouts/header';
import Footer from './../Layouts/footer';
import FormPost from './formPost';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class PostStatus extends Component {

    render() {

        var { history, auth, match } = this.props;

        if (!auth.uid) return <Redirect to='/login' />

        if (match) {
            var id = match.params.id;
        }

        const title = id ? <h1 style={{ color: '#0722f7' }}> Update information</h1> : <h1 style={{ color: 'red' }}>Create new event</h1>
        
        return (
            <div>
                <Header />
                <br /> <br /> <br />
                <center>
                    {title}
                </center>

                <FormPost history={history} match={match} />

                <br /><br />

                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    };
};

export default connect(mapStateToProps, null)(PostStatus);
