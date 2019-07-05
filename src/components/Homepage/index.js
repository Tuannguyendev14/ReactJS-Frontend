import React, { Component,Fragment } from 'react';
import Header   from   './../Layouts/header' ;
import Slide    from   './../Layouts/slide'  ;
import Caption  from   './../Layouts/caption';
import Footer   from   './../Layouts/footer' ;
import Content  from   './../Layouts/content';
import fire from '../../Config/fire';

export default class Index extends Component {

	logout=()=>{
		fire.auth().signOut();
	}

	render() {
		return (
			<Fragment>
				<Header logout={this.logout} />
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
