import React, { useReducer } from 'react'

const initialState = {count:0}

function reducer(state, action) {
    switch (action.type) {
      case 'inc':
        return {count: state.count + 1};
      case 'dec':
        return {count: state.count - 1};
      default:
        alert("no Defined Type")
    }
  }
  

function Reduce() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
        <h1>Count: {state.count}</h1>
        <button onClick={()=> dispatch({ type: 'dec' })}>-</button>
        <button onClick={()=> dispatch({ type: 'inc' })}>+</button>
    </>
  )
}

export default Reduce
