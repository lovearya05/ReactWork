import React, { useReducer } from 'react'

function Reducer() {
    const initialState = 0

    const reducer = (state, action)=>{
        if(action.type=='incr'){
            return state + 1
        }else if(action.type=='dec'){
            return state - 1
        }else{
            console.log("No default case")
        }
    }

    const [data, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <h1>{data} </h1>

        <button onClick={()=> dispatch({type : 'incr'}) } >+</button>
        <button onClick={()=> dispatch({type : 'dec' }) } >-</button>
      
    </div>
  )
}

export default Reducer
