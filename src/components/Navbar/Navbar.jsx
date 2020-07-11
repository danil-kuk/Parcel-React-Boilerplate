import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div className='navbar-container'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/fetch-data'>Fetch Data</Link>
          </li>
          <li>
            <Link to='/hello'>Hello</Link>
          </li>
        </ul>
      </div>
    )
  }
}
