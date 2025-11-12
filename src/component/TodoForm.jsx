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
     <button onClick={handleAdd} style={{marginLeft:"10px"}}>Add</button>
     <button onClick={() => dispatch({ type: "CLEAR_ALL" })} style={{marginLeft:"10px"}}>Clear All</button>

    </div>
  )
}

export default TodoForm