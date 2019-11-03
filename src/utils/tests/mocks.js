import { rowsToColumns, rowsToBlocks } from '../adaptors';

const sudoku = {
  rows: [
    [1, 0, 0, 7, 0, 9, 0, 0, 0],
    [5, 8, 0, 0, 0, 0, 0, 3, 0],
    [7, 0, 6, 0, 0, 0, 0, 1, 9],
    [0, 7, 0, 0, 0, 3, 0, 0, 8],
    [9, 0, 1, 0, 0, 0, 0, 0, 2],
    [6, 0, 8, 5, 0, 0, 0, 0, 7],
    [0, 0, 7, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 9, 0, 0, 4, 0, 3],
    [0, 0, 4, 0, 7, 6, 8, 5, 0],
  ],
};

sudoku.columns = rowsToColumns(sudoku.rows);
sudoku.blocks = rowsToBlocks(sudoku.rows);

export default sudoku;
