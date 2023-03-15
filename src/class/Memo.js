import React, { useState} from 'react'
import List from './List'

function Memo() {
    const [data, setData] = useState([1,2,3])
    const [value, setValue] = useState(0)
  return (
    <div>
        {value}
      <button onClick={()=> setData( [data[1], data[2], data[2] + 1 ] )} > add </button>

        <button onClick={()=>setValue((p)=>p+1)} >increase</button>

      <List data={data}/>
    </div>
  )
}


export default Memo