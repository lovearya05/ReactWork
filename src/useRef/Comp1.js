import React, {useEffect, useRef, useState} from 'react'

function Comp1() {

    const val = useRef(0)
    useEffect(()=>{
        val.current = val.current +1;
    })

    const [value, setValue] = useState(0)
  return (
    <>
        <input type="text" onChange={e => setValue(e.target.value)}/>
        <div>
        use Ref example {val.current}
        </div>
    </>
  )
}

export default Comp1
