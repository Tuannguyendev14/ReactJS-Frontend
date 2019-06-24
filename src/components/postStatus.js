import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default class PostStatus extends Component {

  render() {
    return (
      <div>
        <Header />
        <br /> <br /> <br />
        <div className='row'>
          <div className="col-xs-0 col-sm-3 col-md-1 col-lg-1"> </div>

          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-6 contact-section contact-info">

            <h3>Post your event</h3>

            <form className="contact-form">
              <input type="text" placeholder="Your name" />
              <input type="number" placeholder="Your phone number" />
              <input type="text" placeholder="Event's name" />
              <input type="number" placeholder="Number of participants" />

              <input type="text " placeholder="Venue name" />
              <textarea placeholder="Description" />

              <button className="site-btn">Post now</button>
            </form>
          </div>

          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <form className="md-form">
              <div className="file-field">
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


        <br /><br />

        <Footer />


      </div>
    );
  }
}