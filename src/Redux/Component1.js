import React from 'react'
import { actionCreator } from './index';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from "react-redux";



const Component1 = () => {
    const dispatch = useDispatch();
    const action = bindActionCreators(actionCreator, dispatch);
    
    return (
        <>
        {/* <button onClick={()=>{dispatch(actionCreator.inc(10))}}> + </button> */}
        <button onClick={()=>{action.inc(10)}}> + </button>
        <button onClick={()=>{dispatch(actionCreator.dec(10))}}> - </button>
    </>
  )
}

export default Component1