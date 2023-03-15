import React, { useContext } from 'react'
import { context } from './Comp1'
// import {ThemeContext} from './ThemeContext'

function Comp4() {
  const user = useContext(context)
  // const user = useContext(ThemeContext)
  return (
    <>
      component 4 {user?.email || user}
    </>
  )
}

export default Comp4
