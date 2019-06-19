import React, { Component } from 'react'
import PropTypes from 'prop-types'

import cli from './cli'

const withCli = (ComponentToWrap, command) => {  
  return class CliComponent extends Component {
    state = {
      output: null,
      error: null,
      completed: false
    }

    parseResult(result) {
      try { 
        return JSON.parse(result);
      } catch (error) { 
        return result; 
      }
    }

    componentDidMount() {
      cli.run(command,
      (event, line) => {
        this.setState({ ...this.state, output: [...this.state.output || [], this.parseResult(line)] })
      },
      (event, error) => {
        this.setState({ ...this.state, error: [...this.state.error || [], error] })
      },
      (event, arg) => {
        this.setState({ ...this.state, completed: true })
      })
    }
    render() {
      return (
        <ComponentToWrap
          { ...this.props }
          output={ this.state.output || [] }
          error={ this.state.error }
          completed={ this.state.completed }
        />
      )
    }
  }
}

export default withCli
