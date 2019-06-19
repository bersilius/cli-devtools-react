import React, { Component } from 'react'

import withCli from '../../../cli'
import KubectlNodes from './KubectlNodes'

class Container extends Component {
  render() {
    return (
      <div>
        {
          this.props.error
            ? <div>{this.props.error}</div>
            : <KubectlNodes items={this.props.output} />
        }
      </div>
    )
  }
}

export default withCli(Container, {
  path: '/',
  cmd: 'kubectl',
  args: ['get', 'nodes', '--namespace=kube-system', '--output=json']
})
