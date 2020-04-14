import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import './index.sass'
import Root from './components/Root.js'
import * as Reducers from './reducers'

const store = createStore(Reducers.rootReducer)

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'))
