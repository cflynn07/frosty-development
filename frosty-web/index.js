import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'

import './index.sass'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
function rootReducer (state = {}) {
  return state
}
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))
