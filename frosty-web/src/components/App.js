import React from 'react'

import TodoListsMenu from './TodoListsMenu.js'
import TodoList from './TodoList.js'

const App = () => {
  // const todoLists = [{ id: 1, name: 'first' }, { id: 2, name: 'second' }]
  return (
    <div className='container'>
      <h1>Frosty Todo Demo App</h1>
      <hr />
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
