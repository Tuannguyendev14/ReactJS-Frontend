import * as types from './../constants/actionTypes'


var initialState = [];

var posts = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS:
            state = action.posts;
            return  state;
        default: return [...state];
    }

}
export default posts;