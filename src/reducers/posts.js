import * as types from './../constants/actionTypes'

 
var initialState =  [

    {
        id: 1,
        name:'NGuyen huu tuan'
    },
    {
        id: 2,
        name:'NGuyen huu tung'
    },
    {
        id: 3,
        name:'NGuyen huu hung'
    },
    {
        id: 4,
        name:'NGuyen huu dung'
    }
];  

 

var myReducer = (state = initialState, action )=>{
    switch(action.type){
        case types.POST_ALL:
            return state;
        
            
            
        default :return state;
    }
   
}
export default myReducer;