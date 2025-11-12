import React from 'react'

const TodoList = ({state, dispatch}) => {
  return (
     <div>
        <h2>Todo List</h2>
        {
            state.length === 0 ? <p>No todos available</p> : null
        }
         <ol>
            {
              state.map((todo)=>(
                <li key={todo.id}>
                    <span style={{textDecoration: todo.complete ? "line-through" : "none"}}>{todo.title}</span>
                    <button onClick={()=>dispatch({type:"UPDATE_TODO", id: todo.id})}>
                        {todo.complete ? "Completed" : "Complete"}
                    </button>
                </li>
              ))
            }
         </ol>
    </div>
  )
}

export default TodoList