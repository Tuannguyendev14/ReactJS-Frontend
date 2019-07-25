import React from 'react';
import Index from './components/Homepage/index';
import PostStatus from './components/PostStatusPage/postStatus';
import Login from './components/Auth/login';
import Signup from './components/Auth/signup';
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
import ShowFeed from './admin/feedbacks/show';
import Join from './components/Joinpage/join';
import IndexMember from './admin/members/index';
import ShowMember from './admin/members/show';
import Form from './components/upload/post';
import Profile from './components/Profile/profile';



const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Index />
    },
    {
        path: '/poststatus',
        exact: false,
        main: ({ history }) => <PostStatus history={history} />
    },
    {
        path: '/update/:id/edit',
        exact: false,
        main: ({ match, history }) => <PostStatus match={match} history={history} />
    },
    {
        path: '/feedback',
        exact: false,
        main: () => <Feedback />
    },
    {
        path: '/feedbacks',
        exact: false,
        main: () => <IndexFeed />
    },
    {
        path: '/showFeed/:id',
        exact: false,
        main: ({ match }) => <ShowFeed match={match} />
    },
    {
        path: '/login',
        exact: false,
        main: () => <Login />
    },
    {
        path: '/signup',
        exact: false,
        main: () => <Signup />
    },
    {
        path: '/detail/:id',
        exact: false,
        main: ({ match }) => <Detail match={match} />
    },
    {
        path: '/admin',
        exact: false,
        main: () => <Admin />
    },
    {
        path: '/addPost',
        exact: false,
        main: ({ history }) => <AddPost history={history} />
    },
    {
        path: '/posts',
        exact: false,
        main: ({ match }) => <IndexPost match={match} />
    },
    {
        path: '/show/:id',
        exact: false,
        main: ({ match }) => <ShowPost match={match} />
    },
    {
        path: '/post/:id/edit',
        exact: false,
        main: ({ match, history }) => <AddPost match={match} history={history} />
    },
    {
        path: '/users',
        exact: false,
        main: () => <IndexUsers />
    },
    {
        path: '/showUser',
        exact: false,
        main: ({ match }) => <ShowUser match={match} />
    },
    {
        path: '/addUser',
        exact: false,
        main: () => <AddUser />
    },
    {
        path: '/join',
        exact: false,
        main: () => <Join />
    },
    {
        path: '/members',
        exact: false,
        main: ({ match }) => <IndexMember match={match} />
    },
    {
        path: '/showMember/:id',
        exact: false,
        main: ({ match }) => <ShowMember match={match} />
    },
    {
        path: '/form',
        exact: false,
        main: ({ match }) => <Form match={match} />
    },
    {
        path: '/profile',
        exact: false,
        main: ({ match }) => <Profile match={match} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
    

];


export default routes;

 