import React, { Component } from 'react'

class Greeting extends Component {
  constructor(props) {
    super(props)
    this.state = { name: props.name }
  }

  render() {
    return (
      <div className='navbar-container'>
        <h2>Hello, {this.state.name}!</h2> 
      </div>
    )
  }
}

export default Greeting