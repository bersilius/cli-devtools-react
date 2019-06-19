import React, { Component } from 'react'

import withCli from '../../../cli'
import DockerPs from './DockerPs'

class Container extends Component {
  render() {
    return (
      <div>
        {
          this.props.error
            ? <div>{this.props.error}</div>
            : <DockerPs items={this.props.output} />
        }
      </div>
    )
  }
}

export default withCli(Container, {
  path: '/',
  cmd: 'docker',
  args: ['ps']
})
