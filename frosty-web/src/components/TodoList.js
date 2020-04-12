// import PropTypes from 'prop-types'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { deleteTodoListItem } from '../actions'

function getActiveTodoList (todoLists, location) {
  return todoLists.find(todoList => todoList.id === +location.pathname.split('/').pop())
}

const TodoList = () => {
  const dispatch = useDispatch()
  const todoLists = useSelector((state) => {
    return state.todoLists
  })
  const location = useLocation()
  const activeTodoList = getActiveTodoList(todoLists, location)

  function handleClick (itemId) {
    dispatch(deleteTodoListItem(activeTodoList.id, itemId))
  }

  return (
    <ul className='list-group'>
      {
        activeTodoList.todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => handleClick(todo.id)}
            className='list-group-item'>{todo.value}</li>
        ))
      }
    </ul>
  )
}

export default TodoList
