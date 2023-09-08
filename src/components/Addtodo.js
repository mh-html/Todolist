import React, { useContext, useEffect, useRef, useState } from 'react';

import { TodoContextProvider } from '../contexts/TodolistProvider';

const Addtodo = () => {
    const [inputValue , setInputValue] = useState("")
    const [editID, setEditID] = useState("")
    const [addStatus, setAddStatus] = useState(true)

    const {state ,dispatch} = useContext(TodoContextProvider)
    const inputRef = useRef()

    useEffect(() =>{
        const editTodo = state.find(todo => todo.edit === true)
        if(editTodo){
            inputRef.current.value = editTodo.title
            setEditID(editTodo.id)
            setAddStatus(false)
            inputRef.current.focus()
        }
    }, [state])


    const clickHandler = () =>{
        if(addStatus){
            dispatch({type: "ADD_TODO", payload: inputValue})
        }else{
            dispatch({type: "EDIT_TODO", payload: inputValue, id: editID})
            setAddStatus(true)
        }

        inputRef.current.value = ""
    }

    const changeHandler = (e) =>{
        if(e.key === "Enter"){
            clickHandler()
        }else{
            setInputValue(e.target.value)
        }
    }
    
    return (
        <div className='mt-3 p-4 bg-white shadow-lg rounded-md flex justify-center gap-4 items-center'>

            <input type='text' className='w-80 border-2 border-stone-500 rounded-sm p-2 outline-0 focus:border-stone-600 valid:text-md'
            placeholder='Add Todo...' 
            ref={inputRef}
            onKeyUp={changeHandler}/>

            <button className={addStatus ? "bg-stone-600 px-10 py-2 text-white rounded-sm" : "bg-yellow-500 px-10 py-2 text-white rounded-sm"}
             type='button'
            onClick={clickHandler}
            >{addStatus? "ADD_TODO": "EDIT_TODO"}</button>

        </div>
    );
};

export default Addtodo;