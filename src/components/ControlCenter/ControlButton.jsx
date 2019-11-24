import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, majorScale } from 'evergreen-ui';

import { SudokuContext } from '../../contexts/SudokuContext';

/**
 * Button wrapper to dispatch events to SudokuContext.
 *
 * @returns {React.ReactElement} ControlButton component
 */
function ControlButton({
  title, dispatchType, iconBefore, spaceBelow,
}) {
  const { action } = useContext(SudokuContext);
  const dispatchAction = () => action({ type: dispatchType });

  return (
    <Button
      onClick={dispatchAction}
      marginBottom={spaceBelow ? majorScale(1) : undefined}
      iconBefore={iconBefore}
      display="inline-block"
    >
      {title}
    </Button>
  );
}

ControlButton.propTypes = {
  title: PropTypes.string.isRequired,
  dispatchType: PropTypes.string.isRequired,
  iconBefore: PropTypes.string,
  spaceBelow: PropTypes.bool,
};

ControlButton.defaultProps = {
  iconBefore: undefined,
  spaceBelow: false,
};

export default ControlButton;
