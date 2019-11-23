import React from 'react';
import PropTypes from 'prop-types';
import {
  Pane, Code, majorScale, toaster,
} from 'evergreen-ui';

import './sudoku.css';

/**
 * Generate borders for boxes in the Sudoku.
 *
 * @param {number} rowIdx row index of the cell
 * @param {number} colIdx column index of the cell
 * @returns {object} border specifications that are passed to the Pane component
 */
function getBorders(rowIdx, colIdx) {
  const borderVariant = 'default';
  return {
    borderTop: rowIdx % 3 === 0 ? borderVariant : null,
    borderRight: colIdx % 3 === 2 ? borderVariant : null,
    borderBottom: rowIdx % 3 === 2 ? borderVariant : null,
    borderLeft: colIdx % 3 === 0 ? borderVariant : null,
  };
}

/**
 * Individual Sudoku cell that makes up the Sudoku
 *
 * @returns {React.ReactElement} SudokuCell
 */
function SudokuCell({
  value, onClick, rowIdx, colIdx, fixed,
}) {
  if (typeof value !== 'number') {
    toaster.warning(`Invalid type passed to SudokuCell: expected number, got ${typeof value}`);
  }
  const display = value <= 9 && value >= 1 ? value : 0;

  const {
    borderTop, borderRight, borderBottom, borderLeft,
  } = getBorders(rowIdx, colIdx);

  return (
    <Pane
      border="muted"
      width={majorScale(4)}
      height={majorScale(4)}
      cursor="default"
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={fixed ? null : onClick}
      borderTop={borderTop}
      borderRight={borderRight}
      borderBottom={borderBottom}
      borderLeft={borderLeft}
    >
      <Code
        appearance="minimal"
        className="noselect"
        fontWeight={fixed ? 800 : null}
      >
        {display}
      </Code>
    </Pane>
  );
}

SudokuCell.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  rowIdx: PropTypes.number.isRequired,
  colIdx: PropTypes.number.isRequired,
  fixed: PropTypes.bool.isRequired,
};

export default SudokuCell;
