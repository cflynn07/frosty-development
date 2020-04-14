import React from 'react'

import * as TestUtils from '../test-utils.js'

import * as Reducers from '../reducers'
import * as Actions from '../actions'

import Basic from '../components/Basic.js'

import {
  // render,
  fireEvent,
  cleanup
} from '@testing-library/react'

const expectedInitialReducerState = {
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

describe('default initial state', () => {
  afterEach(cleanup)
  it('shows counter and clicking button increments counter', () => {
    const {
      getByText
    } = TestUtils.getWrapper(<Basic />)
    expect(getByText(/0/).textContent).toBe('0')
    fireEvent.click(getByText(/Increment/i))
    expect(getByText(/1/).textContent).toBe('1')
  })

  it('test of initial state of reducer', () => {
    expect(Reducers.initialState).toEqual(expectedInitialReducerState)
  })

  it('reducer removes a todo list item', () => {
    expect(Reducers.initialState).toEqual(expectedInitialReducerState)
    const todoListId = 1
    const itemId = 1
    const newState = Reducers.rootReducer(
      Reducers.initialState,
      Actions.deleteTodoListItem(todoListId, itemId))
    const expectedNewState = {
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
            // deleted
            {
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
    expect(newState).toEqual(expectedNewState)
  })

  it('test of initial state of reducer', () => {
    Reducers.rootReducer(expectedInitialReducerState, {
      type: 'LOGIN_USER1'
    })
  })
})
