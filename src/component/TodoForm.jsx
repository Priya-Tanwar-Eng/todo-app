import React, { useState } from 'react'

const TodoForm = ({dispatch}) => {
    const [todo, setTodo] = useState("")
 
  return (
    <div>
     <input type='text' placeholder='enter todo' value={todo} onChange={(e)=>setTodo(e.target.value)}/> 
     <button onClick={()=>dispatch({type:"ADD_TODO", title:todo})}>Add</button>
    </div>
  )
}

export default TodoForm