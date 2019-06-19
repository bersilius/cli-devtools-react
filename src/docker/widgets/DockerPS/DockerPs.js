import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

import common from '../../../common';

const { VirtualizedTable } = common.components;

function DockerPs({ items }) {
  return (
    <div style={{ height: 400 }}>
      <Paper style={{ width: '100%', height: '100%' }}>
        <VirtualizedTable
          rowCount={items.length}
          rowGetter={({ index }) => items[index]}
          onRowClick={event => console.log(event)}
          columns={[
            {
              width: 100,
              label: 'Names',
              dataKey: 'Names',
            },
            {
              width: 500,
              flexGrow: 1.0,
              label: 'Image',
              dataKey: 'Image',
            },
            {
              width: 250,
              label: 'Created',
              dataKey: 'CreatedAt',
            },
            {
              width: 250,
              label: 'Ports',
              dataKey: 'Ports',
            },
            {
              width: 250,
              label: 'Status',
              dataKey: 'Status',
            }
          ]}
        />
      </Paper>
    </div>
  );
}

DockerPs.propTypes = {
  items: PropTypes.array.isRequired,
};

export default DockerPs;
