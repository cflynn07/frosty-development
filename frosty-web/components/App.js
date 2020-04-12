import React, { useState, useContext } from 'react'

import LoginForm from './LoginForm.js'

const ThemeContext = React.createContext('light')

const App = () => {
  const [name, setName] = useState('Frank')
  const theme = useContext(ThemeContext)

  function handleNameClick () {
    setName(Math.random() + '')
  }

  function handleNameChange (e) {
    setName(e.target.value)
  }

  return (
    <>
      <h1 onClick={handleNameClick}>{name}</h1>
      <h2>Theme is: {theme}</h2>
      <input
        type='text'
        value={name}
        onChange={handleNameChange}
      />
      <LoginForm />
    </>
  )
}

export default App
