import posts from './posts';      // reducer listall 
import postEditting from './edit';
import post from './readPost';
import filter from './filter_post';
import feedbacks from './feedbacks';      // reducer listall 
import feedback from './readFeedback';

import { combineReducers } from 'redux';
 


const myReducer = combineReducers({
    posts,
    postEditting,
    post,
    filter ,
    feedbacks,
    feedback
});

export default myReducer;