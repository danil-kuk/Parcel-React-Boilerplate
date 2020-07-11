import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './style.scss'

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <NavLink exact to='/' activeClassName={style.activeLink}>Home</NavLink>
        <NavLink to='/fetch-data' activeClassName={style.activeLink}>Fetch Data</NavLink>
        <NavLink to='/hello' activeClassName={style.activeLink}>Hello</NavLink>
      </nav>
    )
  }
}
