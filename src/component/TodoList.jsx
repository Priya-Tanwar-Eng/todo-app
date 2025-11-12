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
                    <button onClick={()=>dispatch({type:"REMOVE_TODO", id: todo.id})}>Remove</button>
                </li>
              ))
            }
         </ol>

         <button onClick={() => dispatch({ type: "CLEAR_ALL" })}>Clear All</button>

    </div>
  )
}

export default TodoList