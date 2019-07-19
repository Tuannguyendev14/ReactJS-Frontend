import * as types from './../constants/actionTypes'

var initialState = [];

var findIndex = (feedbacks, id) => {

    var result = -1;
    feedbacks.forEach((feedback, index) => {
        if (feedback.id === id) {
            result = index;
        }
    });
    return result;
}

var feedbacks = (state = initialState, action) => {
    var { id } = action;
    var index = -1;

    switch (action.type) {
        case types.FETCH_FEEDBACKS:
            state = action.feedbacks;
            return state;

        case types.DELETE_FEEDBACKS:
            id = action.id;
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];

        case types.ADD_FEEDBACK:
            console.log(action.feedback);
            state.push(action.feedback);
            return [...state];

        default: return [...state];
    }

}
export default feedbacks;