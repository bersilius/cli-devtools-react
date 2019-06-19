import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import widgets from '../../widgets'

const { KubectlNodes, KubectlPods } = widgets

class General extends Component {
  render() {
    return (
      <div className="General" style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <div style={{ padding: '1.5em' }}>
            <Typography variant="h6" id="title" align="left">
              Kubectl Nodes
            </Typography>
          </div>
          <KubectlNodes />
        </div>
        <div>
          <div style={{ padding: '1.5em' }}>
            <Typography variant="h6" id="title" align="left">
              Kubectl Pods
            </Typography>
          </div>
          <KubectlPods />
        </div>
      </div>
    )
  }
}

export default General
