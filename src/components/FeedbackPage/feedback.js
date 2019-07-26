import React, { Component } from 'react';
import { Link, Prompt } from 'react-router-dom';
import Header from '../Layouts/header';
import Footer from '../Layouts/footer';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';
import { Redirect } from 'react-router-dom';

class Feedback extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isBlocking: false,
            id: '',
            user_name: '',
            user_email: '',
            subject: '',
            message: '',
            createdAt: ''
        }
    }

    onClear = () => {
        this.setState({
            isBlocking: false,
            id: '',
            user_name: '',
            user_email: '',
            subject: '',
            message: ''
        });
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
            isBlocking: event.target.value.length > 0
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        // var { history } = this.props;
        var { id, user_name, user_email, subject, message } = this.state;
        var feedback = {
            id: id,
            user_name: user_name,
            user_email: user_email,
            subject: subject,
            message: message,
            createdAt: new Date()
        }
        if (id) { // update
            this.props.onUpdatePost(feedback);
        } else { // add new data
            this.props.onSubmit(feedback);
            this.onClear();
        }
        alert("Your feedback has sent successfuly");
    }

    render() {

        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/login' />

        return (
            <div>
                <Header />

                <Prompt when={this.state.isBlocking} message={location => ('Are you sure to move to other page')} />
                <div className="page-top-info">
                    <div className="container">
                        <h4>Contact</h4>
                        <div className="site-pagination">
                            <Link to="/" className="nav-link">  Home   </Link>
                            Contact
                        </div>
                    </div>
                </div>

                <section className="contact-section" >
                    <div className="row">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-1"> </div>

                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                            <h3>Get in touch</h3>
                            <p>Main Str, no 23, New York</p>
                            <p>+546 990221 123</p>
                            <p>hosting@contact.com</p>
                            <div className="contact-social">
                                <a href="/fe"><i className="fa fa-pinterest" /></a>
                                <a href="ewr"><i className="fa fa-facebook" /></a>
                                <a href="/erwr "><i className="fa fa-twitter" /></a>
                                <a href="/wer "><i className="fa fa-dribbble" /></a>
                                <a href="eeee"><i className="fa fa-behance" /></a>
                            </div>
                            <form className="contact-form" onSubmit={this.onSubmit}>
                                <input type="text" placeholder="Your name" name="user_name" value={this.state.user_name} onChange={this.onChange} required />
                                <input type="email" placeholder="Your e-mail" name="user_email" value={this.state.user_email} onChange={this.onChange} required />
                                <input type="text" placeholder="Subject" name="subject" value={this.state.subject} onChange={this.onChange} required />
                                <textarea placeholder="Message" name="message" value={this.state.message} onChange={this.onChange} required />
                                <button className="site-btn" type="submit">SEND NOW</button>
                            </form>
                        </div>

                        <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14376.077865872314!2d-73.879277264103!3d40.757667781624285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1546528920522" style={{ border: 0 }} allowFullScreen title="bando" /></div>
                    </div>

                </section>
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

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSubmit: (feedback) => {
            dispatch(actions.actAddFeedbackRequest(feedback));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);