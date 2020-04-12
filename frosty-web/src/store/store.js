import { createStore } from 'redux'

function reducer (state, action) {
  switch (action) {
    case 'LOGIN_USER':
      break
    case 'ADD_TODO':
      break
    case 'REMOVE_TODO':
      break
    case 'COMPLETE_TODO':
      break
    case 'SELECT_TODO_LIST':
      break
    case 'REMOVE_TODO_LIST':
      break
    default:
      return state
  }
}

const initialState = {
  user: {
    id: 1,
    name: 'Casey',
    email: 'cflynn.us@gmail.com'
  },
  todoLists: [
    {
      id: 1,
      name: 'House Chores',
      todos: [
        {
          value: 'Mow Lawn',
          completed: false
        }, {
          value: 'Clean Dishes',
          completed: false
        }
      ]
    }, {
      id: 2,
      name: 'Work',
      todos: [
        {
          value: 'Call Accountant',
          completed: false
        }, {
          value: 'File Taxes',
          completed: false
        }
      ]
    }
  ]
}

const store = createStore(reducer, initialState)
export default store
