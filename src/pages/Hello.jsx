import React from 'react'
import Greeting from '../components/Greeting'

const Hello = () => {
  return (
    <div className='hello-page'>
      <h1>Hello page</h1>
      <Greeting name='Somebody' />
    </div>
  )
}

export default Hello