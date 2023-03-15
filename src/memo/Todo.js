import React, { useEffect,memo  } from 'react'

function Todo({todos}) {
    useEffect(()=>{
        console.log("updating")
    })
  return (
    <>
        {
            todos.map((val,i)=>{
                return <p key={i}> {val} </p>
            })
        }
    </>
  )
}

export default Todo
// export default memo(Todo)
