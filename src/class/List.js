import React, { useEffect,memo } from 'react'

function List({data}) {
    useEffect(()=>{
        console.log("Hiiii")
    })
  return (
    <div>
      {
        data.map((val,i)=>{
            return <h2 key={i} > {val} </h2>
        })
      }
    </div>
  )
}

export default memo(List)
