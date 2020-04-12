import React, { useState } from 'react'

import {
  Form,
  Button
} from 'react-bootstrap'

export default function LoginForm () {
  const [email, setEmail] = useState('')

  function handleSubmit (e) {
    e.preventDefault()
    fetch('http://localhost/graphql?query={viewer{name}}').then((response) => {
      return response.json()
    }).then((data) => {
      console.log('data', data)
    })
  }

  function handleChange (e) {
    console.log(e.target.value)
    setEmail(e.target.value)
    console.log(email)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name='email'
          type='email'
          placeholder='Enter email'
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          name='password'
          type='password'
          placeholder='Password'
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}
