import React, { Component } from 'react';
import callApi from './../../utils/apicaller';
 

export default class FormPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            user_name: '',
            phone_number: '',
            event_name: '',
            nu_participant: '',
            venue: '',
            description: ''

        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        var {history} = this.props;
        var {user_name, phone_number, event_name, nu_participant, venue, description} = this.state;
        callApi('posts', 'POST', {
            user_name: user_name,
            phone_number: phone_number,
            event_name: event_name,
            nu_participant: nu_participant,
            venue: venue,
            description: description
        }).then(res=>{
             history.push("/posts");
        });
      
    }


    render() {
        return (

            <div className='row'>
                <div className="col-xs-0 col-sm-0 col-md-0 col-lg-1"> </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 contact-section contact-info">

                    <h3>Post your event</h3>

                    <form className="contact-form" onSubmit={this.onSubmit}>
                        <input type="text" placeholder="Your name" name="user_name" value={this.state.user_name} onChange={this.onChange} />
                        <input type="number" placeholder="Your phone number" name="phone_number" value={this.state.phone_number} onChange={this.onChange} />
                        <input type="text" placeholder="Event's name" name="event_name" value={this.state.event_name} onChange={this.onChange} />
                        <input type="number" placeholder="Number of participants" name="nu_participant" value={this.state.nu_participant} onChange={this.onChange} />
                        <input type="text " placeholder="Venue name" name="venue" value={this.state.venue} onChange={this.onChange} />
                        <textarea placeholder="Description" name="description" value={this.state.description} onChange={this.onChange} />

                        <button type="submit" className="site-btn">Post now</button>
                    </form>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5">
                    <form className="md-form">
                        <div className="file-field">
                            <br /><br /><br />
                            <div className="z-depth-1-half mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg" className="img-fluid" alt="example placeholder" />
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="btn btn-mdb-color btn-rounded float-left">
                                    <span>Choose file</span>
                                    <input type="file" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}