import * as types from './../constants/actionTypes';
import callApi from './../utils/apicaller';
// import firebase from '../Config/fire';

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
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' });
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
                phoneNumber: newUser.phoneNumber,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}

export const createPost = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        firestore.collection('posts').add({
            ...post,
            username: 'Tuan',
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_POST', post });
        }).catch((err) => {
            dispatch({ type: 'CREATE_POST_ERROR', err });
        })
    }
}

export const actAddMemberRequest = (member) => {
    return dispatch => {
        return callApi('members', 'POST', member).then(res => {
            dispatch(actAddMember(res.data));
        });
    };
}

export const actAddMember = (member) => {
    return {
        type: types.ADD_MEMBER,
        member
    }
}

export const actFetchMembersRequest = () => {
    return (dispatch) => {
        return callApi('members', 'GET', null).then(res => {
            dispatch(actFetchMembers(res.data));
        });
    };
}

export const actFetchMembers = (members) => {
    return {
        type: types.FETCH_MEMBERS,
        members
    }
}

export const actDeleteMemberRequest = (id) => {
    return dispatch => {
        return callApi(`members/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteMember(id));
        });
    };
}

export const actDeleteMember = (id) => {
    return {
        type: types.DELETE_MEMBER,
        id
    }
}

export const actReadMemberRequest = (id) => {
    return dispatch => {
        return callApi(`members/${id}`, 'GET', null).then(res => {
            dispatch(actReadMember(res.data));
        });
    };
}

export const actReadMember = (member) => {
    return {
        type: types.READ_MEMBER,
        member
    }
}

export const actAddRegisterDetailRequest = (register_detail) => {
    return dispatch => {
        return callApi('register_details', 'POST', register_detail).then(res => {
            dispatch(actAddRegisterDetail(res.data));
        });
    };
}

export const actAddRegisterDetail = (register_detail) => {
    return {
        type: types.ADD_REGISTER_DETAIL,
        register_detail
    }
}

export const actFetchDetailRegisterRequest = () => {
    return (dispatch) => {
        return callApi('register_details', 'GET', null).then(res => {
            dispatch(actFetchRegisterDetail(res.data));
        });
    };
}

export const actFetchRegisterDetail = (members) => {
    return {
        type: types.FETCH_MEMBERS,
        members
    }
}