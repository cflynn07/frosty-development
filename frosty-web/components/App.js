import React, { Component } from 'react'
import { ApolloProvider, useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import client from '../utils/client.js'

const GET_VIEWER = gql`
  query {
    viewer {
      name
      email
    }
  }
`

const User = () => {
  const { data, loading, error } = useQuery(GET_VIEWER)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  return (
    <div className='App'>
      <p>Name: {data.viewer.name}</p>
      <p>Email: {data.viewer.email}</p>
    </div>
  )
}

const App = () => {
  return (
    <ApolloProvider client={client}>
      <User />
    </ApolloProvider>
  )
}

export default App
