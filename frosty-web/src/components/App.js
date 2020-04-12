import React from 'react'

import TodoListsMenu from './TodoListsMenu.js'
import TodoList from './TodoList.js'

const App = () => {
  // const todoLists = [{ id: 1, name: 'first' }, { id: 2, name: 'second' }]
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'><h1>TODO LIST APP</h1></div>
      </div>
      <div className='row'>
        <div className='col-4'>
          <TodoListsMenu />
        </div>
        <div className='col-8'>
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default App
