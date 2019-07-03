import posts from './posts';      // reducer listall 
import postEditting from './edit'  ;     
import post from './read'  ;     
 
import {combineReducers} from 'redux';

const myReducer = combineReducers({
    posts,
    postEditting,
    post
});

export default myReducer;