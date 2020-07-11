import React from 'react'
import style from './style.scss'

export class Home extends React.Component {
  render() {
    return (
      <div className={style.homepage}>
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quod id quis hic quam, ex esse dolore neque natus aliquam laborum corrupti quidem
          temporibus provident commodi maiores voluptatum!
          Error, doloribus deserunt?
        </p>
      </div>
    )
  }
}
