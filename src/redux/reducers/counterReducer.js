import * as actionTypes from '../actions/action_type'

export const counterReducer=(state=2,action)=>{
    switch(action.type){
        case actionTypes.INCREMENT:
              return state+1
                 
        case actionTypes.DECREMENT:
            return state-1
            
        default :
        return  state   
    }

}