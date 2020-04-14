export const initialState = {
  user: {
    id: 1,
    name: 'Casey',
    email: 'cflynn.us@gmail.com'
  },
  todoLists: [
    {
      id: 1,
      name: 'House Chores 1',
      todos: [
        {
          id: 1,
          value: 'Mow Lawn',
          completed: false
        }, {
          id: 2,
          value: 'Clean Dishes',
          completed: false
        }
      ]
    },
    {
      id: 2,
      name: 'Work',
      todos: [
        {
          id: 1,
          value: 'Call Accountant',
          completed: false
        }, {
          id: 2,
          value: 'File Taxes',
          completed: false
        }
      ]
    }
  ]
}

export function rootReducer (state = initialState, action) {
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
    case 'DELETE_TODO_LIST_ITEM':
      return {
        ...state,
        todoLists: todoListsReducer(state.todoLists, action)
      }
    default:
      return state
  }
}

function todoListsReducer (state, action) {
  const todoListIndex = state.findIndex(todoList => todoList.id === action.todoListId)
  if (typeof todoListIndex === 'undefined') return state // in theory shouldn't happen...
  const todoList = state[todoListIndex]

  const newTodoList = {
    ...todoList,
    todos: todoList.todos.filter(todo => todo.id !== action.itemId)
  }

  return [
    ...state.slice(0, todoListIndex),
    newTodoList,
    ...state.slice(todoListIndex + 1, state.length)
  ]
}
