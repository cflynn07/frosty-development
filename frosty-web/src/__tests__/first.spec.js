import React from 'react'

import * as Reducer from '../reducers'
import Basic from '../components/Basic.js'
import TodoListsMenu from '../components/TodoListsMenu.js'

import {
  render,
  fireEvent,
  cleanup
} from '@testing-library/react'

describe('default initial state', () => {
  afterEach(cleanup)
  it('shows counter and clicking button increments counter', () => {
    const {
      getByText
    } = render(<Basic />)
    expect(getByText(/0/).textContent).toBe('0')
    fireEvent.click(getByText(/Increment/i))
    expect(getByText(/1/).textContent).toBe('1')
  })

  it('test of initial state of reducer', () => {
    expect(Reducer.initialState).toEqual({
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
    })
  })
})
