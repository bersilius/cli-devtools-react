import React, { Component } from 'react'

import withCli from '../../../cli'
import KubectlPods from './KubectlPods'

class Container extends Component {
  render() {
    return (
      <div>
        {
          this.props.error
            ? <div>{this.props.error}</div>
            : <KubectlPods items={this.props.output} />
        }
      </div>
    )
  }
}

export default withCli(Container, {
  path: '/',
  cmd: 'kubectl',
  args: ['get', 'pods', '--namespace=kube-system', '--output=json']
})
