import * as types from './../constants/actionTypes'

const initialState = {};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_POST:
            return state;

        case types.CREATE_POST_ERROR:
            return state;

        default:
            return state;
    }
}

export default postReducer;