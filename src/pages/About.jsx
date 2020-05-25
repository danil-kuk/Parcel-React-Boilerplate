import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <h1>About</h1>
      <h3>Show async fetch() data in console</h3>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default About

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const json = await response.json()
  console.log(json)
}