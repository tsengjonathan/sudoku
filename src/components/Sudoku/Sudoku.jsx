import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Pane, majorScale } from 'evergreen-ui';

import SudokuCell from './SudokuCell';
import bruteForce from '../../solvers/bruteForce';
import { SudokuContext } from '../../contexts/SudokuContext';

/**
 * Sudoku component containing all of the Sudoku logic
 *
 * @returns {React.ReactElement} Sudoku
 */
function Sudoku({ numberSelected }) {
  const { sudoku, action } = useContext(SudokuContext);
  const solvedSudoku = bruteForce(sudoku);

  useEffect(() => {
    console.debug('Solved sudoku', solvedSudoku);
  }, [solvedSudoku]);

  return (
    <Pane display="inline-flex" flexWrap="wrap" width={majorScale(4) * 9}>
      {
        sudoku.map((row, rowIdx) => row.map((cell, colIdx) => {
          const { value, fixed } = cell;
          const idx = rowIdx * 9 + colIdx;
          return (
            <SudokuCell
              key={idx}
              value={value}
              rowIdx={rowIdx}
              colIdx={colIdx}
              fixed={fixed}
              onClick={() => action({
                type: 'assign',
                rowIdx,
                colIdx,
                val: numberSelected,
              })}
            />
          );
        }))
      }
    </Pane>
  );
}

Sudoku.propTypes = {
  numberSelected: PropTypes.number.isRequired,
};

export default Sudoku;
