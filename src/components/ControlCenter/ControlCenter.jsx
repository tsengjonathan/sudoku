import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'evergreen-ui';

import ControlButton from './ControlButton';

/**
 * Control center to hold functions such as solve or reset.
 *
 * @returns {React.ReactElement} ControlCenter component
 */
function ControlCenter({ ...props }) {
  const {
    margin, marginTop, marginRight, marginBottom, marginLeft,
  } = props;

  return (
    <Card
      margin={margin}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      display="flex"
      flexDirection="column"
    >
      <ControlButton title="Solve" dispatchType="solve" spaceBelow />
      <ControlButton title="Reset" dispatchType="reset" spaceBelow />
      <ControlButton title="Generate" dispatchType="generate" spaceBelow />
    </Card>
  );
}

ControlCenter.propTypes = {
  margin: PropTypes.number,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
};

ControlCenter.defaultProps = {
  margin: undefined,
  marginTop: undefined,
  marginRight: undefined,
  marginBottom: undefined,
  marginLeft: undefined,
};

export default ControlCenter;
