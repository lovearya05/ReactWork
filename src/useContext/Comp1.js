import React, { useState, useContext, createContext } from 'react'
import Comp2 from './Comp2'

function Comp1() {
    const [user,setUser] = useState({email:"lsingh@gmail",name:"Love "})
    const userContext = createContext("")
  return (
    <userContext.Provider value = {user}>
        <div>Component 1</div>
        <Comp2 />
    </userContext.Provider>
  )
}

export default Comp1
