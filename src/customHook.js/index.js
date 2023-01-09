// import { useState, useEffect } from "react";
// import { ReactDOM } from "react-dom/client";
import useFetch from "./useFetch";

const Home = () =>{
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")
    console.log(data)

    return(
        <>
            {data && data.map((item)=>{
                return <p key={item.id}>{item.title}</p>
            })}
        </>
    )
}

export default Home;