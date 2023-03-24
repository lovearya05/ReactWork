import React, { useState,useCallback } from 'react'
import List from './List'

function UseCallback() {
    const [color, setColor] = useState(true)
    const [arr, setArr] = useState([1])

    const items = useCallback(()=>{
        return arr
    },[arr])

    const sheet = {
        main:{
            backgroundColor : color ? 'red' : 'green',
            height:'300px',
            width : '300px'
        }
    }


  return (
    <div>
      <div style={sheet.main}>
      </div>
      <button onClick={()=> setColor((p)=>!p)} >clr</button>

      <button onClick={()=>setArr((pre)=>{
        return [...pre, arr.length]
      })} >update</button>

      <List items={items}/>
    </div>
  )
}

export default UseCallback
