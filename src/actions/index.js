import * as types from './../constants/actionTypes';
import callApi from './../utils/apicaller';
import firebase from '../Config/fire';

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

export const filterPost = (filter) => {
    return {
        type: types.FILTER_POST,
        filter
    }
}

export const actAddFeedbackRequest = (feedback) => {
    return dispatch => {
        return callApi('feedbacks', 'POST', feedback).then(res => {
            dispatch(actAddFeedback(res.data));
        });
    };
}

export const actAddFeedback = (feedbacks) => {
    return {
        type: types.ADD_FEEDBACK,
        feedbacks
    }
}

export const actFetchFeedbackRequest = () => {
    return (dispatch) => {
        return callApi('feedbacks', 'GET', null).then(res => {
            dispatch(actFetchFeedback(res.data));
        });
    };
}

export const actFetchFeedback = (feedbacks) => {
    return {
        type: types.FETCH_FEEDBACKS,
        feedbacks
    }
}

export const actDeleteFeedbackRequest = (id) => {
    return dispatch => {
        return callApi(`feedbacks/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteFeedback(id));
        });
    };
}

export const actDeleteFeedback = (id) => {
    return {
        type: types.DELETE_FEEDBACKS,
        id
    }
}

export const actReadFeedbackRequest = (id) => {
    return dispatch => {
        return callApi(`feedbacks/${id}`, 'GET', null).then(res => {
            dispatch(actReadFeedback(res.data));
        });
    };
}

export const actReadFeedback = (feedback) => {
    return {
        type: types.READ_FEEDBACK,
        feedback
    }
}

export const signIn = (credentials) => {
    return ( dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type: 'LOGIN_SUCCESS'});
        }).catch((err)=>{
            dispatch({type: 'LOGIN_ERROR', err});
        });
    }
}

export const signOut = () => {
    return ( dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type: 'SIGNOUT_SUCCESS'});
        });
    }
}

 

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }


}