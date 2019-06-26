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
import Admin from './admin/homepage/admin';
import addPost from './admin/posts/add';
import indexPost from './admin/posts/index';
import showPost from './admin/posts/show';
import indexUsers from './admin/users/index';
import showUser from './admin/users/show';
import addUser from './admin/users/add';


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
            <Route exact path= '/admin' component = {Admin}/>
            <Route exact path= '/addPost' component = {addPost}/>
            <Route exact path= '/showPost' component = {showPost}/>
            <Route exact path= '/indexPost' component = {indexPost}/>
            <Route exact path= '/showUser' component = {showUser}/>
            <Route exact path= '/indexUser' component = {indexUsers}/>
            <Route exact path= '/addUser' component = {addUser}/>

        </BrowserRouter>
      </div>
      
    );
  } 
}

export default App;
