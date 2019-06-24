import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default class Join extends Component {

	render() {
		return (
            <div>
            <Header/>
            {/* Page info */}
            <div className="page-top-info">
              <div className="container">
                <h4>Contact</h4>
                <div className="site-pagination">
                  <a href><Link to="/" className="nav-link"> Home</Link></a>  
                  <a href>Contact</a>
                </div>
              </div>
            </div>
            {/* Page info end */}
            {/* Contact section */}
            <section className="contact-section" >
              
                <div className="row">
                  
                  <div class="col-xs-2 col-sm-2 col-md-2 col-lg-1">
                      
                  </div>
                  
                  <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <h3>Get in touch</h3>
                        <p>Main Str, no 23, New York</p>
                        <p>+546 990221 123</p>
                        <p>hosting@contact.com</p>
                        <div className="contact-social">
                          <a href="#"><i className="fa fa-pinterest" /></a>
                          <a href="#"><i className="fa fa-facebook" /></a>
                          <a href="#"><i className="fa fa-twitter" /></a>
                          <a href="#"><i className="fa fa-dribbble" /></a>
                          <a href="#"><i className="fa fa-behance" /></a>
                        </div>
                        <form className="contact-form">
                          <input type="text" placeholder="Your name" />
                          <input type="text" placeholder="Your e-mail" />
                          <input type="text" placeholder="Subject" />
                          <textarea placeholder="Message" defaultValue={""} />
                          <button className="site-btn">SEND NOW</button>
                        </form>
                  </div>
                  
                    <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14376.077865872314!2d-73.879277264103!3d40.757667781624285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1546528920522" style={{border: 0}} allowFullScreen /></div>
                      
               
                  
                   
                </div>
                 
              
            </section>
            {/* Contact section end */}
             
             <br/><br/>
            <Footer/>
          </div>
		);
	}
}


