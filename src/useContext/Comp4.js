import React, { useContext } from 'react'

function Comp4() {
const userCtx = useContext("")
  return (
    <userCtx.Consumer>
        {userCtx}
    </userCtx.Consumer>

    // <div>
    //   Comp4 {user}
    // </div>
  )
}

export default Comp4
