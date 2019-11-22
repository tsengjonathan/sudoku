import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Pane, majorScale } from 'evergreen-ui';

import SudokuCell from './SudokuCell';
import bruteForce from '../../solvers/bruteForce';
import exampleSudoku from '../../puzzles/11-03-2019';

const templateSudoku = exampleSudoku.rows;

/**
 * Sudoku component containing all of the Sudoku logic
 *
 * @returns {React.ReactElement} Sudoku
 */
function Sudoku({ numberSelected }) {
  const [sudoku, setSudoku] = useState([]);
  const [solvedSudoku, setSolvedSudoku] = useState([]);

  useEffect(() => {
    setSudoku(templateSudoku);
    setSolvedSudoku(bruteForce(templateSudoku, true));
  }, []);

  useEffect(() => {
    console.debug('Solved sudoku', solvedSudoku);
  }, [solvedSudoku]);

  /**
   * @param {number} rowIdx row index of the sudoku cell to change
   * @param {number} colIdx column index of the sudoku cell to change
   * @param {number} val value [0, 9] to change to
   */
  function setCell(rowIdx, colIdx, val) {
    const newSudoku = sudoku.slice();
    newSudoku[rowIdx][colIdx] = val;
    setSudoku(newSudoku);
  }

  return (
    <Pane display="inline-flex" flexWrap="wrap" width={majorScale(4) * 9}>
      {
        sudoku.map((row, rowIdx) => row.map((cell, colIdx) => (
          <SudokuCell
            value={cell}
            rowIdx={rowIdx}
            colIdx={colIdx}
            onClick={() => setCell(rowIdx, colIdx, numberSelected)}
          />
        )))
      }
    </Pane>
  );
}

Sudoku.propTypes = {
  numberSelected: PropTypes.number.isRequired,
};

export default Sudoku;
