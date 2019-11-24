import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, majorScale } from 'evergreen-ui';

import { SudokuContext } from '../../contexts/SudokuContext';

/**
 * Control center to hold functions such as solve or reset.
 *
 * @returns {React.ReactElement} ControlCenter component
 */
function ControlCenter({ ...props }) {
  const {
    margin, marginTop, marginRight, marginBottom, marginLeft,
  } = props;

  const { action } = useContext(SudokuContext);

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
      <Button
        onClick={() => action({ type: 'solve' })}
        marginBottom={majorScale(1)}
      >
        Solve
      </Button>
      <Button onClick={() => action({ type: 'reset' })}>Reset</Button>
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
