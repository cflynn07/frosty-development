const initialState = {
  user: {
    id: 1,
    name: 'Casey',
    email: 'cflynn.us@gmail.com'
  },
  activeTodoListId: 1,
  todoLists: [
    {
      id: 1,
      name: 'House Chores 1',
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

export default function rootReducer (state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case 'LOGIN_USER':
      break
    case 'CREATE_TODO':
      break
    case 'DELETE_TODO':
      break
    case 'COMPLETE_TODO':
      break
    case 'SELECT_TODO_LIST':
      break
    case 'DELETE_TODO_LIST':
      break
    case 'UPDATE_ACTIVE_TODO_LIST_ID':
      console.log('here')
      console.log({
        ...state,
        activeTodoListId: action.id
      })
      return {
        ...state,
        activeTodoListId: action.id
      }
    default:
      return state
  }
}
