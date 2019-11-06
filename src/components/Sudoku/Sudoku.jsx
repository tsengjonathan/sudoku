import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Pane, majorScale } from 'evergreen-ui';

import SudokuCell from './SudokuCell';

/**
 *
 */
function Sudoku() {
  const generateRow = () => _.times(9, _.constant(0));
  const [sudoku, setSudoku] = useState([]);

  useEffect(() => {
    setSudoku(_.times(9, generateRow));
  }, []);

  // console.log('Sudoku in Rows', sudoku);

  return (
    <Pane display="inline-flex" flexWrap="wrap" width={majorScale(4) * 9}>
      {
        sudoku.map((grid) => grid.map((cell) => <SudokuCell value={cell} />))
      }
    </Pane>
  );
}


export default Sudoku;
