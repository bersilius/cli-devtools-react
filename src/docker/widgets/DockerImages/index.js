import React, { Component } from 'react'

import withCli from '../../../cli'
import DockerImages from './DockerImages'

class Container extends Component {
  render() {
    return (
      <div>
        {
          this.props.error
            ? <div>{this.props.error}</div>
            : <DockerImages items={this.props.output} />
        }
      </div>
    )
  }
}

export default withCli(Container, {
  path: '/',
  cmd: 'docker',
  args: ['images', '--format', '{{json .}}']
})
