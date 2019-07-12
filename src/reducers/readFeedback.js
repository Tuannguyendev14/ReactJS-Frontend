import * as types from './../constants/actionTypes'

var initialState = {};

var feedback = (state = initialState, action) => {
    switch (action.type) {
        case types.READ_FEEDBACK:
            return action.feedback;
        default: return  state ;
    }
}
export default feedback;