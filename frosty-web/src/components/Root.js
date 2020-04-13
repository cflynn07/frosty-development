import PropTypes from 'prop-types'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App.js'

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' component={App} />
          <Route path='/list/:list' component={App} />
        </Switch>
      </Router>
    </Provider>
  )
}
Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
