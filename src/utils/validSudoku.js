import _ from 'lodash';

/**
 * Checks if the given array is a valid Sudoku array.
 * A valid Sudoku array is defined as an array with non-repeating values, 1 to 9 inclusive
 * Used to check if a given row/column/square of sudoku numbers are valid
 * @param {number[]} set array of numbers to check
 */
function validSudokuArray(set) {
  if (!Object.prototype.hasOwnProperty.call(set, 'length')) {
    throw Error(`validSudokurray expected an Array - received ${typeof set} instead`);
  } else if (set.length !== 9) {
    throw Error(`validSudokuArray expected an Array of length 9 - received ${set.length} instead`);
  }
  const validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return _.xor(set, validNumbers).length === 0;
}

export default validSudokuArray;
