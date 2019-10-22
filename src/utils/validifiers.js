import _ from 'lodash';

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
  validSudokuArray,
};
