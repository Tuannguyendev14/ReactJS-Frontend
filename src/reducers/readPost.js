import * as types from '../constants/actionTypes'

var initialState = {};

var post = (state = initialState, action) => {
    switch (action.type) {
        case types.READ_POST:
            return action.post;
        default: return  state ;
    }
}
export default post;