import React, { Component } from 'react';
import { Link, Prompt } from 'react-router-dom';
import * as actions from './../../actions/index';
import { connect } from 'react-redux';

class FormPost extends Component {
    state = {
        isBlocking: false,
        id: '',
        user_name: '',
        phone_number: '',
        event_name: '',
        event_image: '',
        startDay: '',
        startTime: '',
        endDay: '',
        endTime: '',
        nu_participant: '',
        venue: '',
        description: '',
        createdAt: '',
        postedBy: ''

    }

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            isBlocking: e.target.value.length > 0
        });
    }


    onSubmit = (event) => {
        event.preventDefault();
        var { history, auth } = this.props;
        var { id, user_name, phone_number, event_name, event_image, startDay, startTime, endDay, endTime, nu_participant, venue, description } = this.state;
        var post = {
            id: id,
            user_name: user_name,
            phone_number: phone_number,
            event_name: event_name,
            event_image: event_image,
            startDay: startDay,
            startTime: startTime,
            endDay: endDay,
            endTime: endTime,
            nu_participant: nu_participant,
            venue: venue,
            description: description,
            createdAt: new Date(),
            postedBy: auth.firstName + auth.lastName
        }
        this.props.onSubmit(post);

        this.setState({
            isBlocking: false
        });
        history.goBack();
    }

    render() {
        return (
            <div className='row'>
                <Prompt when={this.state.isBlocking} message={location => ('Are you sure to move to other page')} />
                <div className="col-xs-0 col-sm-0 col-md-0 col-lg-2"> </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-9 contact-section contact-info">
                    <form className="contact-form" onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3>Your name: </h3>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                <input type="text" placeholder="Your name" id="user_name" onChange={this.onChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3>Your phone number: </h3>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                <input type="number" placeholder="Your phone number" id="phone_number" onChange={this.onChange}  required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3>Event name: </h3>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                <input type="text" placeholder="Event's name" id="event_name" onChange={this.onChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3>Event image: </h3>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                <input type="text" id="event_image" onChange={this.onChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3>Start day: </h3>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                <input type="date" id="startDay" onChange={this.onChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3>Start time: </h3>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                <input type="time" id="startTime" onChange={this.onChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3>End day: </h3>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                <input type="date" id="endDay" onChange={this.onChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3>End time: </h3>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                <input type="time" id="endTime" onChange={this.onChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3>Nu participant: </h3>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                <input type="number" id="nu_participant" onChange={this.onChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3>Venue: </h3>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                <input type="text " id="venue" onChange={this.onChange} required/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3>Description: </h3>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                <textarea id="description" onChange={this.onChange} rows="3" required/>
                            </div>
                        </div>
                        <center>
                            <Link to="/posts"> <button style={{ marginLeft: '-125px' }} type="button"
                                className="site-btn">Back</button></Link>
                            <button style={{ marginLeft: '40px' }} type="submit" className="site-btn">Post now</button>
                        </center>


                    </form>
                </div>
                <div className="col-xs-0 col-sm-0 col-md-0 col-lg-2"> </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.profile
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (post) => {
            dispatch(actions.actAddPostRequest(post));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormPost); 
