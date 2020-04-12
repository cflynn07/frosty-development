import React from 'react'

import TodoList from './TodoList.js'
import TodoListsMenu from './TodoListsMenu.js'

const App = () => {
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
