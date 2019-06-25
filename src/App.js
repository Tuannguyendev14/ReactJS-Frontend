import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Index from './components/index';
import Footer from './components/footer';
import PostStatus from './components/postStatus';
import Join from './components/join';
import Login from './components/login';
import Signup from './components/signup';
import Detail from './components/detail';
import index from './admin/trip/index';

class App extends Component {
  render() { 
    return (
      <div>  
       
        <BrowserRouter>
            <Route exact path= '/' component = {Index}/>
            <Route exact path= '/footer' component = {Footer}/>
            <Route exact path= '/poststatus' component = {PostStatus}/>
            <Route exact path= '/join' component = {Join}/>
            <Route exact path= '/login' component = {Login}/>
            <Route exact path= '/signup' component = {Signup}/>
            <Route exact path= '/detail' component = {Detail}/>
            <Route exact path= '/detail' component = {Detail}/>
            <Route exact path= '/indexTrip' component = {index}/>
        </BrowserRouter>
      </div>
      
    );
  } 
}

export default App;
