import React from 'react'
import Alert from 'react-bootstrap/Alert'

export default function Alerter () {
  return (
    <Alert dismissible variant='success'>
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        Change this and that and try again.
      </p>
    </Alert>
  )
}
