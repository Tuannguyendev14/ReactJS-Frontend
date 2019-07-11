import posts from './posts';      // reducer listall 
import postEditting from './edit';
import post from './read';
import filter from './filter_post';
import feedbacks from './feedbacks';      // reducer listall 

import { combineReducers } from 'redux';
 


const myReducer = combineReducers({
    posts,
    postEditting,
    post,
    filter ,
    feedbacks
});

export default myReducer;