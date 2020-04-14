import '@testing-library/jest-dom'
import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { render } from '@testing-library/react'

import * as Reducers from './reducers'

export const mockStore = createStore(Reducers.rootReducer, Reducers.initialState)
export const getWrapper = (children) => render(
  <Provider store={mockStore}>
    <Router initialEntries={['/list/1']}>
      {children}
    </Router>
  </Provider>
)
