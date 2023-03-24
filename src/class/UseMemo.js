import React, { useState,useMemo } from 'react'
import List from './List'

function UseMemo() {
    const [arr, setArr] = useState([1,2])
    const [val, setVal] = useState(1)

    const calculate = (num)=>{
        for(let i=0;i<=1000000000;i++){
            num +=i
        }

        return num
    }

    const temp = useMemo(()=>calculate(val),[val]) 

  return (
    <div>
    value : {val}   temp : {temp}
      <button onClick={()=>setVal(val+1)} >inc</button>

      <button onClick={()=>setArr((pre)=>{
        return [...pre, arr.length]
      })} >update</button>

      <List items={arr}/>
    </div>
  )
}

export default UseMemo
