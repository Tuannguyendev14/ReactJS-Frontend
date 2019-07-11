import React from 'react';
 
import Index from './components/Homepage/index';
import PostStatus from './components/PostStatusPage/postStatus';
import Login from './components/LoginPage/login';
import Signup from './components/SignUp/signup';
import Detail from './components/DetailPage/detail';
import Admin from './admin/homepage/admin';
import AddPost from './admin/posts/add';
import IndexPost from './admin/posts/index';
import ShowPost from './admin/posts/show';
import IndexUsers from './admin/users/index';
import ShowUser from './admin/users/show';
import AddUser from './admin/users/add';
import NotFound from './components/NotFound';
import Feedback from './components/FeedbackPage/feedback';
import IndexFeed from './admin/feedbacks/index';

 
const routes=[
    {
        path:'/',
        exact:true,
        main: () => <Index/>
    },
    {
        path:'/poststatus',
        exact:false,
        main: () => <PostStatus/>
    },
    {
        path:'/feedback',
        exact:false,
        main: () => <Feedback/>
    },
    {
        path:'/feedbacks',
        exact:false,
        main: () => <IndexFeed/>
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
