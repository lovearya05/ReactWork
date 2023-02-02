import { useCallback, useState } from "react"
import List from "./List"

export default function Comp1(){
    
    const [value, setValue] = useState(0)
    const [color, setColor] = useState(true)

    const getItems = useCallback(()=>{
        return [value, value+1, value+2]
    },[value])

    const theme = {
        backgroundColor : color ? 'red' : 'green',
        width:'176px'
    }

    return(
        <>
        <div style={theme}>

        <input type={"number"} placeholder="enter value" value={value} onChange={(e)=>setValue(Number(e.target.value))} />

        <button onClick={()=>setColor(p => !p)}>Toggle</button>
        <List  getItems={getItems}/>

        </div>
        </>
    )
}

