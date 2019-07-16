import * as types from './../constants/actionTypes'

const initialState = {
    authError: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_ERROR:
            console.log('login error');
            return {
                ...state,
                authError: 'Login failed'
            }

        case types.LOGIN_SUCCESS:
            console.log('login success');
            return {
                ...state,
                authError: null
            }

        case types.SIGNOUT_SUCCESS: 
            console.log('sign out  success');
            return state;
        // case types.SIGNUP_SUCCESS:
        //     console.log('sign up success');
        //     return {
        //         ...state,
        //         authError: null
        //     }

        // case types.SIGNUP_ERROR:
        //     console.log('sign up error');
        //     return {
        //         ...state,
        //         authError: action.err.message
        //     }

        default:
            return state;
    }
}
export default authReducer;