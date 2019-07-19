import * as types from '../constants/actionTypes'

var initialState = {};

var member = (state = initialState, action) => {
    switch (action.type) {
        case types.READ_MEMBER:
            return action.member;
        default: return  state ;
    }
}
export default member;