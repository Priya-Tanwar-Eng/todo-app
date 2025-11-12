import React, { useState } from 'react'

const TodoForm = ({dispatch}) => {
    const [todo, setTodo] = useState("")
    const handleAdd = () => {
      if (!todo.trim()) {
        alert("Please enter a todo!");
      return;
      }
     dispatch({ type: "ADD_TODO", title: todo });
      setTodo("");
     };
  return (
    <div>
     <input type='text' placeholder='enter todo' value={todo} onChange={(e)=>setTodo(e.target.value)}/> 
     <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoForm