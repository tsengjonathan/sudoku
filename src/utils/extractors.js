/**
 * Returns the row where the specified cell is located.
 *
 * @param {number} rowIdx zero-based row index of the cell
 * @param {number} colIdx zero-based column index of the cell
 * @param {Array.<Array.<number>>} sudoku row representation of the sudoku
 * @returns {Array.<number>} row containing the specified cell
 */
function getRowFromIndex(rowIdx, colIdx, sudoku) {
  return sudoku[rowIdx].slice();
}

/**
 * Returns the column where the specified cell is located.
 *
 * @param {number} rowIdx zero-based row index of the cell
 * @param {number} colIdx zero-based column index of the cell
 * @param {Array.<Array.<number>>} sudoku row representation of the sudoku
 * @returns {Array.<number>} column containing the specified cell
 */
function getColumnFromIndex(rowIdx, colIdx, sudoku) {
  const column = [];
  sudoku.forEach((row) => column.push(row[colIdx]));
  return column;
}

/**
 * Computes the lower and upper bounds of the block where the index is located.
 *
 * @example
 * // returns [0, 2]
 * getBlockBoundsByIndex(0)
 * @example
 * // returns [3, 5]
 * getBlockBoundsByIndex(5)
 * @param {number} idx zero-based index of the cell (applies to rows and columns)
 * @returns {Array.<number>} lower and upper block bounds of the given index
 */
function getBlockBoundsByIndex(idx) {
  const idxRem = idx % 3;
  return [
    idxRem === 0 ? idx : idx - (idxRem),
    idxRem === 2 ? idx : idx + 2 - (idxRem),
  ];
}

/**
 * Returns the block where the specified cell is located.
 *
 * @param {number} rowIdx zero-based row index of the cell
 * @param {number} colIdx zero-based column index of the cell
 * @param {Array.<Array.<number>>} sudoku row representation of the sudoku
 * @returns {Array.<number>} block containing the specified cell
 */
function getBlockFromIndex(rowIdx, colIdx, sudoku) {
  const [rowLow, rowHigh] = getBlockBoundsByIndex(rowIdx);
  const [colLow, colHigh] = getBlockBoundsByIndex(colIdx);
  const block = [];

  for (let i = rowLow; i <= rowHigh; i += 1) {
    for (let j = colLow; j <= colHigh; j += 1) {
      block.push(sudoku[i][j]);
    }
  }

  return block;
}


export {
  getRowFromIndex,
  getColumnFromIndex,
  getBlockFromIndex,
};
