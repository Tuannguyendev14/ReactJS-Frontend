import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Index from './components/index';

class App extends Component {
  render() { 
    return (
      <div>  
       
        <BrowserRouter>
            <Route exact path= '/' component = {Index}/>
        </BrowserRouter>
      </div>
      
    );
  } 
}

export default App;
