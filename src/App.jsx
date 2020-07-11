import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import FetchData from './pages/FetchData'
import Hello from './pages/HelloPage'

class App extends Component {
  render() {
    return (
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/hello' component={Hello} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
