function rowsToColumns(sudoku) {
  if (!Object.prototype.hasOwnProperty.call(sudoku, 'length')) {
    throw Error(`rowsToColumns expected an Array - received ${typeof sudoku} instead`);
  } else if (sudoku.length !== 9 || sudoku[0].length !== 9) {
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

export default rowsToColumns;

export {
  rowsToColumns,
};
