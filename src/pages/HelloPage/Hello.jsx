import React from 'react'
import Greeting from '../../components/Greeting'

export class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'Somebody'
    }
  }

  render() {
    return (
      <div className='hello-page'>
        <h1>Hello page</h1>
        <Greeting name={this.state.userName} />
      </div>
    )
  }
}
