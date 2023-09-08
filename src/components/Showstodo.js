import { useContext } from "react";

// contexts
import {TodoContextProvider} from "../contexts/TodolistProvider" 

//components
import TodoItem from "./TodoItem";

const Showstodo = () => {
    const {state : todos, dispatch} = useContext(TodoContextProvider)
    let counter = 0

    return (
        <div className="mt-3 p-4 bg-white shadow-lg rounded-md">
            {
                todos.map(todo =>{ 
                counter++
                return <TodoItem key={todo.id} todo={todo} disFunc={dispatch} counter={counter}/>
                })
            }
        </div>
    );
};

export default Showstodo;