import * as types from './../constants/actionTypes'

var initialState = [];

// var findIndex = (members, id) => {

//     var result = -1;
//     members.forEach((member, index) => {
//         if (member.id === id) {
//             result = index;
//         }
//     });
//     return result;
// }

var register_details = (state = initialState, action) => {
    var { id } = action;
    var index = -1;

    switch (action.type) {
        case types.ADD_REGISTER_DETAIL:
            state.push(action.register_detail);
            return [...state];

        // case types.FETCH_MEMBERS:
        //     state = action.members;
        //     return state;

        // case types.DELETE_MEMBER:
        //     id = action.id;
        //     index = findIndex(state, id);
        //     state.splice(index, 1);
        //     return [...state];

        default: return [...state];
    }
}
export default register_details;