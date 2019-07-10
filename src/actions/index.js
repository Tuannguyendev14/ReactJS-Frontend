import * as types from './../constants/actionTypes';
import callApi from './../utils/apicaller';
 

export const actFetchPostsRequest = () => {
    return (dispatch) => {
        return callApi('posts', 'GET', null).then(res => {
            dispatch(actFetchPosts(res.data));
        });
    };
}

export const actFetchPosts = (posts) => {
    return {
        type: types.FETCH_POSTS,
        posts
    }
}

export const actDeletePostRequest = (id) => {
    return dispatch => {
        return callApi(`posts/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeletePost(id));
        });
    };
}

export const actDeletePost = (id) => {
    return {
        type: types.DELETE_POST,
        id
    }
}

export const actAddPostRequest = (post) => {
    return dispatch => {
        return callApi('posts', 'POST', post).then(res => {
            dispatch(actAddPost(res.data));
        });
    };
}

export const actAddPost = (post) => {
    return {
        type: types.ADD_POST,
        post
    }
}

export const actGetPostRequest = (id) => {
    return dispatch => {
        return callApi(`posts/${id}`, 'GET', null).then(res => {
            dispatch(actGetPost(res.data));
        });
    };
}

export const actGetPost = (post) => {
    return {
        type: types.EDIT_POST,
        post
    }
}

export const actUpdatePostRequest = (post) => {
    return dispatch => {
        return callApi(`posts/${post.id}`, 'PUT', post).then(res => {
            dispatch(actUpdatePost(res.data));
        });
    };
}


export const actUpdatePost = (post) => {
    return {
        type: types.UPDATE_POST,
        post
    }
}

export const actReadPostRequest = (id) => {
    return dispatch => {
        return callApi(`posts/${id}`, 'GET', null).then(res => {
            dispatch(actReadPost(res.data));
        });
    };
}

export const actReadPost = (post) => {
    return {
        type: types.READ_POST,
        post
    }
}

export const filterPost = (filter)=>{
    return {
        type: types.FILTER_POST,
        filter
    }
}