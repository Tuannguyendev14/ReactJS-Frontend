import posts from './posts'      // reducer listall 
 
import {combineReducers} from 'redux';


const myReducer = combineReducers({
    posts  
});

export default myReducer;