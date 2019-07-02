import * as types from './../constants/actionTypes'


var initialState = [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_POSTS:
            state = action.myReducer;
            return  state;
        default: return [...state];
    }

}
export default myReducer;