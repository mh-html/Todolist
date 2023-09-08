import { createContext, useReducer } from "react";
import {v4 as uuidv4 } from 'uuid'

//initial state
const initialState = [];


//reducer function
const todoReducer = (state, action) =>{
    switch(action.type){

        case "ADD_TODO":
            const newTodo = {id: uuidv4() , title: action.payload, completed: false, edit:false}
            return [...state, newTodo];

        case "COMPLETE":
            const selectIndexForComplete = state.findIndex(todo => todo.id === action.payload);
            if (selectIndexForComplete !== -1) {
                const updatedTodos = [...state];
                updatedTodos[selectIndexForComplete] = { ...updatedTodos[selectIndexForComplete], completed: !(updatedTodos[selectIndexForComplete].completed)};
                return updatedTodos;
            }
            return state;

        case "EDIT_TODO":
            const selectTodoEdit = state.findIndex(todo => todo.id === action.id);
                const updatedTodos = [...state];
                updatedTodos[selectTodoEdit] = { ...updatedTodos[selectTodoEdit], edit: false, title: action.payload};
                return updatedTodos;

        case "EDIT":
            const selectIndexForEdit = state.findIndex(todo => todo.id === action.payload);
            if (selectIndexForEdit !== -1) {
                const updatedTodos = [...state];
                updatedTodos[selectIndexForEdit] = { ...updatedTodos[selectIndexForEdit] , edit: true };
                return updatedTodos;
            }
            return state;
        
        case "DELETE":
            return state.filter(todo => todo.id !== action.payload)
            
        default:
            return state;
    }
}

//create context for todo
export const TodoContextProvider = createContext(null)

const TodolistProvider = ({children}) =>{
    const [state, dispatch] = useReducer(todoReducer, initialState)
    return (
        <TodoContextProvider.Provider value={{state, dispatch}}>
            {children}
        </TodoContextProvider.Provider>
    )
}

export default TodolistProvider;