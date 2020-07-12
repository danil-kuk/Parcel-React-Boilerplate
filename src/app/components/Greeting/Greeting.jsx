import React, { Component } from 'react'

export class Greeting extends Component {
  render() {
    return (
      <div className='navbar-container'>
        <h2>Hello, {this.props.name}!</h2>
      </div>
    )
  }
}
