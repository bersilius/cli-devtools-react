import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import widgets from '../../widgets'

const { DockerPS, DockerImages } = widgets

class General extends Component {
  render() {
    return (
      <div className="General" style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <div style={{ padding: '1.5em' }}>
            <Typography variant="h6" id="title" align="left">
              Docker Containers
            </Typography>
          </div>
          <DockerPS />
        </div>
        <div>
          <div style={{ padding: '1.5em' }}>
            <Typography variant="h6" id="title" align="left">
              Docker Images
            </Typography>
          </div>
          <DockerImages />
        </div>
      </div>
    )
  }
}

export default General
