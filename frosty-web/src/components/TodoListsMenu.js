import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { deleteTodoList } from '../actions'

const TodoListsMenu = (props) => {
  const todoLists = props.todoLists.map((todoList) => (
    <li
      key={todoList.id}
      onClick={() => { props.deleteTodoList(todoList.id) }}
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
  todoLists: PropTypes.array.isRequired,
  deleteTodoList: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    todoLists: state.todoLists
  }
}

const mapDispatchToProps = dispatch => ({
  deleteTodoList: id => dispatch(deleteTodoList(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListsMenu)
