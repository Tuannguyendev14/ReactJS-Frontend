import * as types from './../constants/actionTypes'

var initialState = [];

var findIndex = (posts, id) => {

    var result = -1;
    posts.forEach((post, index) => {
        if (post.id === id) {
            result = index;
        }
    });
    return result;
}

var posts = (state = initialState, action) => {
    var { id, post } = action;
    var index = -1;

    switch (action.type) {
        case types.FETCH_POSTS:
            state = action.posts;
            return state;

        case types.DELETE_POST:
            id = action.id;
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];

        case types.ADD_POST:
            state.push(action.post);
            return [...state];

        case types.UPDATE_POST:
            index = findIndex(state, post.id);
            state[index] = post;
            return [...state];

        default: return [...state];
    }

}
export default posts;