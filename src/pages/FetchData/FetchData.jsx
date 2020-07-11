import React from 'react'

export class FetchData extends React.Component {
  render() {
    return (
      <div className='about'>
        <h1>Fetch Data</h1>
        <h3>Show async fetch() data in console</h3>
        <button onClick={getData}>Get Data</button>
      </div>
    )
  }
}

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const json = await response.json()
  console.log(json)
}
