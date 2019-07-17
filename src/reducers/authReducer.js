import * as types from './../constants/actionTypes'

const initialState = {
    authError: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_POST:
            return state;

        case types.CREATE_POST_ERROR:
            return state;

        case types.LOGIN_ERROR:
            return {
                ...state,
                authError: 'This account is not correct, please check again!'
            }

        case types.LOGIN_SUCCESS:
            return {
                ...state,
                authError: null
            }

        case types.SIGNOUT_SUCCESS:
            return state;

        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                authError: null
            }

        case types.SIGNUP_ERROR:
            return {
                ...state,
                authError: action.err.message
            }

        default:
            return state;
    }
}
export default authReducer;