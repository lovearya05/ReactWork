import React, { useEffect,memo } from 'react'

function List({items}) {


    useEffect(()=>{
        console.log("Hiiii")
    })
  return (
    <div>
      {
        items.map((val,i)=>{
            return <h2 key={i} > {val} </h2>
        })
      }
    </div>
  )
}

export default memo(List)
