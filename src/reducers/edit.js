import * as types from './../constants/actionTypes'

var initialState = {};

var postEditting = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_POST:
            return action.post ;
        default: return state ;
    }
}
export default postEditting;