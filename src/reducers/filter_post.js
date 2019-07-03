import * as types from './../constants/actionTypes';
 
var initialState =  {
    name:''
};  
 
var filter = (state = initialState, action )=>{
    switch(action.type){
        case types.FILTER_POST:
            return {
                name: action.filter.name
            };
        default :return state;
    }
}
export default filter;