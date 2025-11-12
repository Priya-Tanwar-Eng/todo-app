import React, { useReducer, useState } from 'react'
import TodoForm from './component/TodoForm'
import TodoList from './component/TodoList'

const todoReducer = (state, action) => {
   switch(action.type){
    case "ADD_TODO":
      const newTodo = {id:Date.now() , title:action.title, complete: false};
      return [...state, newTodo]
    case "REMOVE_TODO":
      return state.filter((todo)=>todo.id !== action.id)
    case "UPDATE_TODO":
      return state.map((todo)=>{
        if(todo.id === action.id){
          return {...todo, complete:!todo.complete}
        }
         return todo
      })   
    default:
      return state  
   }
}
const App = () => {
 const [state, dispatch] = useReducer(todoReducer, []);
 console.log(state)
  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm dispatch={dispatch}/>
      <TodoList state={state} dispatch={dispatch}/>
    </div>
  )
}

export default App