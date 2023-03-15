import React, { useState} from 'react'
import Todo from './Todo';

function Main() {
    const [count, setCount] = useState(0)
    const [todo, setTodo] = useState([1,2,3,4]);

    const inc = ()=>{
        setCount((c)=>c+1);
    }

    const addVal = () =>{
        setTodo((p)=>[...p,todo[todo.length-1]+1])
    }

  return (
    <div>
        <hr />
        <div>
            count: {count}
            <button onClick={inc} >+</button>
            <button onClick={addVal} >Add value </button>
        </div>
        <Todo todos = {todo}/>

    </div>
  )
}

export default Main
