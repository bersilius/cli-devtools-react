import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

import common from '../../../common';

const { VirtualizedTable } = common.components;

function KubectlNodes({ items }) {
  return (
    <div style={{ height: 400 }}>
      <Paper style={{ width: '100%', height: '100%' }}>
        <VirtualizedTable
          rowCount={items.length}
          rowGetter={({ index }) => items[index]}
          onRowClick={event => console.log(event)}
          columns={[
            {
              width: 300,
              label: 'Repository',
              dataKey: 'Repository',
            },
            {
              width: 200,
              label: 'Tag',
              dataKey: 'Tag',
            },
            {
              width: 250,
              label: 'Created',
              dataKey: 'CreatedAt',
            },
            {
              width: 250,
              flexGrow: 1.0,
              label: 'Size',
              dataKey: 'Size',
            }
          ]}
        />
      </Paper>
    </div>
  );
}

KubectlNodes.propTypes = {
  items: PropTypes.array.isRequired,
};

export default KubectlNodes;
