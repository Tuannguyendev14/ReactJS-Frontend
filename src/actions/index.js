import * as types from './../constants/actionTypes';
import callApi from './../utils/apiCaller';

export const actFetchPostsRequest = () => {
    return (dispatch)=>{
        return callApi('posts', 'GET', null).then(res => {
            dispatch(actFetchPosts(res.data));
        });
    };
} 

export const actFetchPosts = (posts) => {
    return {
        type : types.FETCH_POSTS,
        posts
    }
} 
 
 
 