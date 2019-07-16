import posts from './posts';      // reducer listall 
import postEditting from './edit';
import post from './readPost';
import filter from './filter_post';
import feedbacks from './feedbacks';      // reducer listall 
import feedback from './readFeedback';
import authReducer from './authReducer';
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
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default myReducer;