import _ from 'lodash';

/**
 * Checks if the given set if a valid Sudoku matrix.
 * A Sudoku matrix is one that resembles a 9x9 matrix -
 * meaning that the set has 9 subarrays in total,
 * and each subarray has 9 number elements.
 * @param {*} set arbitrary input to check
 * @returns {boolean} whether the input is a valid sudoku matrix
 */
function validSudokuMatrix(set) {
  return _.isArray(set)
    && set.length === 9
    && _.every(set, (row) => row && row.length === 9);
}

/**
 * Checks if the given array is a valid Sudoku array.
 * A valid Sudoku array is defined as an array with non-repeating values, 1 to 9 inclusive
 * Used to check if a given row/column/square of sudoku numbers are valid
 * @param {*} set arbitrary input to check for a valid sudoku array
 * @returns {boolean} whether the input is a valid sudoku array or not
 */
function validSudokuArray(set) {
  if (!set || !Object.prototype.hasOwnProperty.call(set, 'length') || set.length !== 9) {
    return false;
  }

  const validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return _.xor(set, validNumbers).length === 0;
}

export default validSudokuArray;

export {
  validSudokuMatrix,
  validSudokuArray,
};
