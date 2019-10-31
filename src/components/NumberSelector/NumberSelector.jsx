import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Radio, Pane } from 'evergreen-ui';

/**
 * Select which number to input into the Sudoku grid.
 *
 * @param {Function} onChange handle triggers when user selects a different number
 * @returns {React.ReactElement} NumberSelector component
 */
function NumberSelector({ onChange, filledValues }) {
  // Storybook knobs only allow string arrays
  const filteredValues = filledValues.map((value) => (
    typeof value === 'string' ? parseInt(value, 10) : value
  ));

  const radioOptions = _.range(1, 10)
    .map((option) => (
      <Radio
        name="group"
        key={option}
        label={option}
        value={option}
        disabled={filteredValues.includes(option)}
        onChange={(e) => onChange(e.target)}
      />
    ));

  return (
    <Pane>
      {radioOptions}
    </Pane>
  );
}

NumberSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  filledValues: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

NumberSelector.defaultProps = {
  filledValues: [],
};

export default NumberSelector;
