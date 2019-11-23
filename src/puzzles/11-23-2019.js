import { rowsToColumns, rowsToBlocks } from '../utils/adaptors';

const sudoku = {
  rows: [
    [0, 0, 0, 0, 0, 1, 0, 8, 0],
    [8, 1, 0, 6, 0, 0, 0, 0, 7],
    [0, 0, 4, 0, 2, 0, 6, 0, 0],
    [0, 6, 0, 2, 0, 8, 0, 0, 0],
    [0, 0, 5, 0, 0, 0, 0, 0, 2],
    [0, 0, 0, 7, 0, 3, 1, 9, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 1, 9, 0, 2, 0, 7, 8],
    [0, 0, 6, 1, 0, 0, 0, 0, 9],
  ],
};

sudoku.columns = rowsToColumns(sudoku.rows);
sudoku.blocks = rowsToBlocks(sudoku.rows);

export default sudoku;
