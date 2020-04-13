import React from 'react'
import {
  render,
  cleanup
} from '@testing-library/react'

// import userEvent from '@testing-library/user-event'

import App from '../components/App.js'

describe('default initial state', () => {
  afterEach(cleanup)
  it('user can view all todo lists and active todo list items', () => {
    console.log('foo')
  })
})
