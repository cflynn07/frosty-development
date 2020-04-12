import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const mapStateToProps = (state) => {
  console.log('mstp!')
  return {
    todoLists: state.todoLists
  }
}

const TodoListsMenu = (props) => {
  const todoLists = props.todoLists.map((todoList) => (
    <li
      key={todoList.id}
      className='list-group-item'>
      {todoList.name}
    </li>
  ))
  return (
    <ul className='list-group'>
      {todoLists}
    </ul>
  )
}
TodoListsMenu.propTypes = {
  todoLists: PropTypes.array
}

export default connect(
  mapStateToProps
)(TodoListsMenu)
