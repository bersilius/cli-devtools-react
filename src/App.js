import React, { Component } from 'react'
import './App.css'

import common from './common'
import docker from './docker'

const { General } = docker.views
const { AppHeader } = common.widgets

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <General />
      </div>
    )
  }
}

export default App
