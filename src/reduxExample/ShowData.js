import React from 'react'
import { useSelector } from 'react-redux'

function ShowData() {

    const amout = useSelector((state)=> state.counter)
    
  return (
    <div>
      value : {amout}
    </div>
  )
}

export default ShowData
