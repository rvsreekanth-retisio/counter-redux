import * as actionTypes from './action_type'


export const incrementValue=()=>{
    return{
        type:actionTypes.INCREMENT
    }

}

export const decrementValue=()=>{
    return{
        type:actionTypes.DECREMENT
    }
}