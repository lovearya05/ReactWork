import React from 'react'
import Comp3 from './Comp3'
// import {UserContext} from './Comp1'
function Comp2() {
  // const user = useContext(UserContext)
  return (
    <div>
      Component 2
      {/* {user} */}
      <Comp3/>
    </div>
  )
}

export default Comp2