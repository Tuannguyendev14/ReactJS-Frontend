import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Index from './components/index';
import Footer from './components/footer';
import PostStatus from './components/postStatus';
import Join from './components/join';

class App extends Component {
  render() { 
    return (
      <div>  
       
        <BrowserRouter>
            <Route exact path= '/' component = {Index}/>
            <Route exact path= '/footer' component = {Footer}/>
            <Route exact path= '/poststatus' component = {PostStatus}/>
            <Route exact path= '/join' component = {Join}/>
        </BrowserRouter>
      </div>
      
    );
  } 
}

export default App;
