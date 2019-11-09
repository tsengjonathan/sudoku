import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Pane, majorScale } from 'evergreen-ui';

import SudokuCell from './SudokuCell';

const generateRow = () => _.times(9, _.constant(0));

/**
 *
 */
function Sudoku({ numberSelected }) {
  const [sudoku, setSudoku] = useState([]);

  useEffect(() => {
    setSudoku(_.times(9, generateRow));
  }, []);

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

  // console.log('Sudoku in Rows', sudoku);

  return (
    <Pane display="inline-flex" flexWrap="wrap" width={majorScale(4) * 9}>
      {
        sudoku.map((row, rowIdx) => row.map((cell, colIdx) => (
          <SudokuCell
            value={cell}
            onClick={() => setCell(rowIdx, colIdx, numberSelected)}
          />
        )))
      }
    </Pane>
  );
}


export default Sudoku;
