import { useEffect, useState } from "react"


export default function List({getItems}){
    const [items, setItems] = useState([])

    useEffect(()=>{
        setItems(getItems())
        console.log("updating items")
    },[getItems])

    return(
        items.map(val=><h1>{val}</h1>) 
        // <></>  
    )
}
