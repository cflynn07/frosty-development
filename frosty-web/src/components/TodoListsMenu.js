import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { updateActiveTodoListId } from '../actions'

const TodoListsMenu = (props) => {
  const todoLists = props.todoLists.map((todoList) => (
    <li
      key={todoList.id}
      onClick={() => { props.updateActiveTodoListId(todoList.id) }}
      className='nav-item'
    >
      <a
        href='#'
        className={classNames({
          'nav-link': true,
          active: (todoList.id === props.activeTodoListId)
        })}
      >{todoList.name}</a>
    </li>
  ))
  return (
    <ul className='nav nav-pills flex-column'>
      {todoLists}
    </ul>
  )
}
TodoListsMenu.propTypes = {
  todoLists: PropTypes.array.isRequired,
  activeTodoListId: PropTypes.number.isRequired,
  updateActiveTodoListId: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    todoLists: state.todoLists,
    activeTodoListId: state.activeTodoListId
  }
}

const mapDispatchToProps = dispatch => ({
  updateActiveTodoListId: id => dispatch(updateActiveTodoListId(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListsMenu)
