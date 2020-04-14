import React from 'react'

import * as TestUtils from '../test-utils.js'

// import * as Reducers from '../reducers'
// import * as Actions from '../actions'

import TodoListsMenu from '../components/TodoListsMenu.js'

import {
  cleanup
} from '@testing-library/react'

describe('default initial state', () => {
  afterEach(cleanup)

  it('first todolistsmenu test', () => {
    const {
      getByText
    } = TestUtils.getWrapper(<TodoListsMenu />)

    expect(getByText(/^House Chores 1$/)).toHaveTextContent('House Chores 1')
    expect(getByText(/^House Chores 1$/)).toHaveClass('active')
    expect(getByText(/^Work$/)).toHaveTextContent('Work')
    expect(getByText(/^Work$/)).not.toHaveClass('active')
  })
})
