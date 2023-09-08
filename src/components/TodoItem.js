
const TodoItem = ({counter, todo, disFunc}) => {
    

    return (
        <div className="flex justify-between items-center mt-4 border-b-2 pb-4">
            <h1 className={todo.completed ? "text-xl font-bold text-stone-400 line-through" : "text-xl font-bold"}><span className={todo.edit? "text-yellow-500": "text-red-600"}>{counter}. </span> {todo.title} </h1>
            <div className="flex items-center justify-center gap-2">

                <button className={todo.completed ? "w-40 py-1 bg-green-600 text-white rounded-sm" : "w-40 py-1 bg-stone-500 text-white rounded-sm"}
                onClick={() => disFunc({type: "COMPLETE", payload: todo.id})}
                >{todo.completed ? "Completed" : "Uncompleted !"}</button>

                <button className="w-20 py-1 bg-red-600 rounded-sm text-white"
                onClick={() => disFunc({type: "DELETE", payload: todo.id})}>Delete</button>

                <button className="w-20 py-1 bg-yellow-400 rounded-sm text-white"
                onClick={() => disFunc({type: "EDIT", payload: todo.id})}
                >{todo.edit? "Editing" : "Edit"}</button>

            </div>
        </div>
    );
};

export default TodoItem;