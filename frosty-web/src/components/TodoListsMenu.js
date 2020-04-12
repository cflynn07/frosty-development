import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const TodoListsMenu = () => {
  const todoLists = useSelector((state) => {
    return state.todoLists
  })
  return (
    <ul className='nav nav-pills flex-column'>
      {todoLists.map((todoList) => (
        <li
          key={todoList.id}
          className='nav-item'
        >
          <NavLink
            className='nav-link'
            to={`/list/${todoList.id}`}
          >
            {todoList.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default TodoListsMenu
