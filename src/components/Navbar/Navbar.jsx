import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/fetch-data'>Fetch Data</Link>
        <Link to='/hello'>Hello</Link>
      </nav>
    )
  }
}
