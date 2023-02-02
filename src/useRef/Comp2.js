import React, {useRef, useState, useEffect} from 'react'

function Comp2() {
    const ref = useRef()
    const [val, setVal] = useState()

    const focus = ()=>{
        ref.current.focus()
        // console.log(ref)
    }

  return (
      <>
        <h1>Comp2 {val}</h1>
        <input ref={ref} type="text" onChange={e=>setVal(e.target.value)} />
        <button onClick={focus}>Click me</button>
    </>
  )
}

export default Comp2