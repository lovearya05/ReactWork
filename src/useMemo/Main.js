
import React, { useState, useMemo } from 'react'

function Main() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const expensiveCalculation = (num) => {
        console.log("Calculating...", num);
        for (let i = 0; i < 1000000000; i++) {
            num += 1;
        }
        return num;
    };
    
    const calculation = useMemo(() => expensiveCalculation(count), [count])

    const increment = () => {
        setCount((c) => c + 1);
    };

    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <div>
            <button onClick={addTodo}>Add Todo</button>
            Count: {count}
            <button onClick={increment}>+</button>
            <h2>Expensive Calculation</h2>
            {calculation}
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
        </div>
    );
};




export default Main
