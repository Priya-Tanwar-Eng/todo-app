import React from 'react'

const TodoList = ({state, dispatch}) => {
  return (
     <div>
        <h2>Todo List</h2>
        {
            state.length === 0 ? <p>No todos available</p> : null
        }
         <ol style={{listStyleType:"decimal", textAlign:"left", display:"inline-block"}}>
            {
              state.map((todo)=>(
                <li key={todo.id} style={{marginBottom:"10px"}}>
                    <span style={{textDecoration: todo.complete ? "line-through" : "none"}}>{todo.title}</span>
                    <button onClick={()=>dispatch({type:"UPDATE_TODO", id: todo.id})} style={{marginLeft:"10px", marginRight:"10px"}}>
                        {todo.complete ? "Completed" : "Complete"}
                    </button>
                    <button onClick={()=>dispatch({type:"REMOVE_TODO", id: todo.id})}>Remove</button>
                </li>
              ))
            }
         </ol>


    </div>
  )
}

export default TodoList