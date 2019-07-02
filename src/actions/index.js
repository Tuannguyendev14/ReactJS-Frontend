import * as types from './../constants/actionTypes';

export const listPosts = (posts) => {
    return {
        type : types.LIST_POSTS,
        posts
    }
} 
 
 