import posts from './posts';      // reducer listall 
import postEditting from './edit';
import post from './readPost';
import filter from './filter_post';
import feedbacks from './feedbacks';      // reducer listall 
import feedback from './readFeedback';
import authReducer from './authReducer';
import postReducer from './postReducer';
import members from './members';      // reducer listall 
import member from './readMember';
import register_details from './register_details';


import { firebaseReducer } from 'react-redux-firebase';

import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';


const myReducer = combineReducers({
    posts,
    postEditting,
    post,
    filter,
    feedbacks,
    feedback,
    postReducer,
    members,
    member,
    register_details,
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default myReducer;