import React, { Component,Fragment } from 'react';
import Header   from   './../Layouts/header' ;
import Slide    from   './../Layouts/slide'  ;
import Caption  from   './../Layouts/caption';
import Footer   from   './../Layouts/footer' ;
import Content  from   './../Layouts/content';

export default class Index extends Component {
	render() {
		return (
			<Fragment>
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
				<br /><br />
				<Footer />
			</Fragment>
		);
	}
}
