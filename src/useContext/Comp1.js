import React, { useEffect, useState } from 'react'
import Comp2 from './Comp2'
// import { ThemeProvider } from './ThemeContext'

export const context = React.createContext()

function Comp1() {
    // const [user,setUser] = useState({email:"lsingh@gmail",name:"Love "})

    
  return (
    <context.Provider  value = {{email:"hii@gmail"}}>
        <div>Component 1</div>
         <Comp2 />
     </context.Provider>

    // {/* <ThemeProvider>
    //    <Comp2/>
    // </ThemeProvider>  */}

  )
}

export default Comp1
