import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {incrementValue,decrementValue} from '../redux/actions/action_creator'

 function Counter(){
    const state=useSelector(state=>state.counterReducer)
    console.log(state)
    const dispatch=useDispatch()
       
    return(
        <div>
          <button onClick={()=>dispatch(incrementValue())}>Increment</button>
          <p>{state}</p>
          <button onClick={()=>dispatch(decrementValue())}> Decrement</button>
        </div>
    )
}


export default Counter;