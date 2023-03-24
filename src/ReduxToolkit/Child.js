import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Child() {
    // const value = 20
    const dispatch = useDispatch()
    const value = useSelector((state)=>state.custom.cnt)

    const increseBtn = ()=>{
        dispatch({
            type : 'increment'
        })
    }

    const decreseBtn = ()=>{
        dispatch({
            type : 'decrement'
        })
    }
    
    const increseByValue = ()=>{
        dispatch({
            type : 'incrementByValue',
            payload : 10
        })
    }



    // console.log(value)
    return (
      <div>
        <h2>{value}</h2>
        
        <button onClick={increseBtn}>Increment</button>
        <button onClick={decreseBtn}>Decrement</button>
        <button onClick={increseByValue}>IncrementByValue</button>
      </div>
    )
}

export default Child
