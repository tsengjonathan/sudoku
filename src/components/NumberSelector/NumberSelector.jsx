import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Radio, Pane } from 'evergreen-ui';

import { SudokuContext } from '../../contexts/SudokuContext';

/**
 * Converts a cell value to a number, since the cell value can be a string or a number.
 *
 * @param {number|string} value cell value to be converted
 * @returns {number} corresponding number for the given value
 */
function toNumber(value) {
  return typeof value === 'string' ? parseInt(value, 10) : value;
}

/**
 * Select which number to input into the Sudoku grid.
 *
 * @param {Function} onChange handle triggers when user selects a different number
 * @returns {React.ReactElement} NumberSelector component
 */
function NumberSelector({ onChange, filledValues, ...props }) {
  const {
    margin, marginTop, marginRight, marginBottom, marginLeft,
  } = props;
  // Storybook knobs only allow string arrays
  const filteredValues = filledValues.map(toNumber);

  const { setNumberSelected } = useContext(SudokuContext);

  const radioOptions = _.range(1, 10)
    .map((option) => (
      <Radio
        name="group"
        key={option}
        label={option}
        value={option.toString()}
        disabled={filteredValues.includes(option)}
        onChange={(e) => setNumberSelected(toNumber(e.target.value))}
      />
    ));

  return (
    <Pane
      margin={margin}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
    >
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
  margin: PropTypes.number,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
};

NumberSelector.defaultProps = {
  filledValues: [],
  margin: undefined,
  marginTop: undefined,
  marginRight: undefined,
  marginBottom: undefined,
  marginLeft: undefined,
};

export default NumberSelector;
