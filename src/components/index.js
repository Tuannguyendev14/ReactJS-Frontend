import React,{Component}from 'react';
import {Link} from 'react-router-dom';
import Header from './header';
import Slide from './slide';
import Caption from './caption';
import Footer from './footer';
import Content from './content';
 
 

export default class Index extends Component{


	render(){
		return (
			<div>
			  
  				 <Header/>
  				 <Slide/>
				<Caption/>
				<Content/>

				<Footer/>
			</div>
		); 
	}
		
	
}
 