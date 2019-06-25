import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Slide from './slide';
import Caption from './caption';
import Footer from './footer';
import Content from './content';



export default class Index extends Component {


	render() {
		return (
			<div>

				<Header />
				<Slide />
				<Caption />

				<div className="row" >
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
						<div className="container-fluid">
							<Content />
						</div>
					</div>
					 
				</div>
				

				<Footer />
			</div>
		);
	}


}
