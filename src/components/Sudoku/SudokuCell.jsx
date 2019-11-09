import React from 'react';
import PropTypes from 'prop-types';
import { Pane, Code, majorScale } from 'evergreen-ui';

import './sudoku.css';

/**
 * Individual Sudoku cell that makes up the Sudoku
 *
 * @returns {React.ReactElement} SudokuCell
 */
function SudokuCell({ value, onClick }) {
  if (typeof value !== 'number') {
    console.error(`Invalid type passed to SudokuCell: expected number, got ${typeof value}`);
  }
  const display = value <= 9 && value >= 1 ? value : 0;

  return (
    <Pane
      border="muted"
      width={majorScale(4)}
      height={majorScale(4)}
      cursor="default"
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={onClick}
    >
      <Code appearance="minimal" className="noselect">{display}</Code>
    </Pane>
  );
}

SudokuCell.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SudokuCell;
