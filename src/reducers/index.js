import posts from './posts';      // reducer listall 
import postEditting from './edit';
import post from './read';
import filter from './filter_post';
import { combineReducers } from 'redux';
 


const myReducer = combineReducers({
    posts,
    postEditting,
    post,
    filter 
});

export default myReducer;