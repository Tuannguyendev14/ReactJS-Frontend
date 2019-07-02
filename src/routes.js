import React from 'react';
 
import Index from './components/index';
import Footer from './components/footer';
import PostStatus from './components/postStatus';
import Join from './components/join';
import Login from './components/login';
import Signup from './components/signup';
import Detail from './components/detail';
import Admin from './admin/homepage/admin';
import AddPost from './admin/posts/add';
import IndexPost from './admin/posts/index';
import ShowPost from './admin/posts/show';
import IndexUsers from './admin/users/index';
import ShowUser from './admin/users/show';
import AddUser from './admin/users/add';
import NotFound from './components/NotFound';

 
const routes=[
    {
        path:'/',
        exact:true,
        main: () => <Index/>
    },
    {
        path:'/footer',
        exact:false,
        main: () => <Footer/>
    },
    {
        path:'/poststatus',
        exact:false,
        main: () => <PostStatus/>
    },
    {
        path:'/join',
        exact:false,
        main: () => <Join/>
    },
    {
        path:'/login',
        exact:false,
        main: () => <Login/>
    },
    {
        path:'/signup',
        exact:false,
        main: () => <Signup/>
    },
    {
        path:'/detail',
        exact:false,
        main: () => <Detail/>
    },
    {
        path:'/admin',
        exact:false,
        main: () => <Admin/>
    },
    {
        path:'/addPost',
        exact:false,
        main:({history}) => <AddPost history={history}/>
    },
    {
        path:'/posts',
        exact: false,
        main: ({match}) => <IndexPost match={match} />
    },
    {
        path:'/show/:id',
        exact:false,
        main: ({match}) => <ShowPost match={match}  />
    },
    {
        path:'/post/:id/edit',
        exact:false,
        main: ({match,history}) => <AddPost match={match} history={history}/>
    },
    {
        path:'/users',
        exact:false,
        main: () => <IndexUsers/>
    },
    {
        path:'/showUser',
        exact:false,
        main: ({match}) => <ShowUser match={match}/>
    },
    {
        path:'/addUser',
        exact:false,
        main: () => <AddUser/>
    },
    {
        path:'',
        exact:false,
        main: () => <NotFound/>
    }

];


export default routes;
