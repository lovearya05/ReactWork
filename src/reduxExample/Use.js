import React from 'react'
// import { bindActionCreators } from 'redux';
import { useDispatch } from "react-redux";
import {inc, dec} from './action/action'


function Use() {

  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={()=>{
        dispatch(inc(10))
      }} >increment </button>


      <button onClick={()=>{

        dispatch(dec(5))
      }} >Decrement </button>
    </div>
  )
}

export default Use
