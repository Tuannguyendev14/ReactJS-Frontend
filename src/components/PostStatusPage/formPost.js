import React, { Component } from 'react';
import { Link, Prompt } from 'react-router-dom';
import * as actions from './../../actions/index';
import { connect } from 'react-redux';

class FormPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
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

        if (id) { // update
            this.props.onUpdatePost(post);
        } else { // add new data
            this.props.onSubmit(post);
        }
        this.setState({
            isBlocking: false
        });
        history.goBack();
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditPost(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.postEditting) {
            this.setState({
                id: nextProps.postEditting.id,
                user_name: nextProps.postEditting.user_name,
                phone_number: nextProps.postEditting.phone_number,
                event_name: nextProps.postEditting.event_name,
                event_image: nextProps.postEditting.event_image,
                startDay: nextProps.postEditting.startDay,
                startTime: nextProps.postEditting.startTime,
                endDay: nextProps.postEditting.endDay,
                endTime: nextProps.postEditting.endTime,
                nu_participant: nextProps.postEditting.nu_participant,
                venue: nextProps.postEditting.venue,
                description: nextProps.postEditting.description
            });
        }
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
                                <h3>Orginazer: </h3>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                <input type="text" placeholder="Orginazer name" name="user_name" onChange={this.onChange} value={this.state.user_name} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3>Phone number: </h3>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                <input type="number" placeholder="Phone number" name="phone_number" onChange={this.onChange} value={this.state.phone_number} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3>Event name: </h3>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                <input type="text" placeholder="Event's name" name="event_name" onChange={this.onChange} value={this.state.event_name} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3>Event image: </h3>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                <input type="text" placeholder="Event's image" name="event_image" onChange={this.onChange} value={this.state.event_image} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3>Start day: </h3>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                <input type="date" name="startDay" onChange={this.onChange} value={this.state.startDay} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3>Start time: </h3>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                <input type="time" name="startTime" onChange={this.onChange} value={this.state.startTime} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3>End day: </h3>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                <input type="date" name="endDay" onChange={this.onChange} value={this.state.endDay} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3>End time: </h3>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                <input type="time" name="endTime" onChange={this.onChange} value={this.state.endTime} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3>Nu participant: </h3>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                <input type="number" placeholder="Number of participant" name="nu_participant" onChange={this.onChange} value={this.state.nu_participant} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3>Venue: </h3>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                <input type="text " placeholder="Place" name="venue" onChange={this.onChange} value={this.state.venue} required />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3>Description: </h3>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-8">
                                <textarea name="description" placeholder="Description" onChange={this.onChange} value={this.state.description} rows="3" required />
                            </div>
                        </div>
                        <center>
                            <Link to="/"> <button style={{ marginLeft: '-125px' }} type="button"
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
        auth: state.firebase.profile,
        postEditting: state.postEditting
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (post) => {
            dispatch(actions.actAddPostRequest(post));
        },
        onEditPost: (id) => {
            dispatch(actions.actGetPostRequest(id));
        },
        onUpdatePost: (post) => {
            dispatch(actions.actUpdatePostRequest(post));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPost); 
