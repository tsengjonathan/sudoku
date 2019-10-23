import _ from 'lodash';

import { validSudokuMatrix } from './validifiers';

/**
 * Converts a row-based Sudoku to a column-based one.
 *
 * @param {Array.<Array.<number>>} sudoku row-based sudoku
 * @returns {Array.<Array.<number>>} column-based representation of the given sudoku
 */
function rowsToColumns(sudoku) {
  if (!validSudokuMatrix(sudoku)) {
    const columns = sudoku[0] ? sudoku[0].length : undefined;
    throw Error(`rowsToColumns expected a 9x9 Array - received ${sudoku.length}x${columns} array instead`);
  }

  const result = [];
  for (let col = 0; col < sudoku[0].length; col += 1) {
    const column = [];
    for (let row = 0; row < sudoku.length; row += 1) {
      column.push(sudoku[row][col]);
    }
    result.push(column);
  }
  return result;
}

/**
 * Converts a row-based Sudoku to a block-based one.
 *
 * @param {Array.<Array.<number>>} sudoku row-based sudoku
 * @returns {Array.<Array.<number>>} block-based representation of the given sudoku
 */
function rowsToBlocks(sudoku) {
  if (!validSudokuMatrix(sudoku)) {
    const columns = sudoku[0] ? sudoku[0].length : undefined;
    throw Error(`rowsToBlocks expected a 9x9 Array - received ${sudoku.length}x${columns} array instead`);
  }

  const blocks = [];
  const indexBlocks = _.chunk(_.range(9), 3);
  indexBlocks.forEach((rowBlock) => {
    indexBlocks.forEach((colBlock) => {
      const block = [];
      rowBlock.forEach((row) => {
        colBlock.forEach((col) => {
          block.push(sudoku[row][col]);
        });
      });
      blocks.push(block);
    });
  });
  return blocks;
}

export {
  rowsToColumns,
  rowsToBlocks,
};
