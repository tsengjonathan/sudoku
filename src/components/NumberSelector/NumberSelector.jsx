import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { SegmentedControl } from 'evergreen-ui';

const availableOptions = _.range(1, 10).map((num) => ({ label: num, value: num }));

/**
 * Select which number to input into the Sudoku grid.
 *
 * @param {Function} onChange handle triggers when user selects a different number
 * @returns {React.ReactElement} NumberSelector component
 */
function NumberSelector({ onChange }) {
  // SegmentedControl selects the first value on mount
  // we want to propogate this to our parent dom
  useEffect(() => {
    onChange(availableOptions[0].value);
  });

  return (
    <SegmentedControl
      options={availableOptions}
      onChange={onChange}
    />
  );
}

NumberSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default NumberSelector;
