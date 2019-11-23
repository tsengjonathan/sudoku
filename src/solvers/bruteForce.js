import _ from 'lodash';

import { getStakeholdersFromIndex } from '../utils/extractors';

/**
 * Given the position of the cell, determine what the next smallest valid value should be.
 * If no valid values are found, then return 0.
 *
 * `initialVal` is needed because our solver may need to backtrack and we don't want to
 * retry the same numbers again.
 *
 * @param {number} rowIdx zero-based row index of the cell
 * @param {number} colIdx zero-based column index of the cell
 * @param {Array.<Array.<number>>} sudoku row representation of the sudoku
 * @param {number} initialVal initial value to start checking
 * @returns {number} smallest valid input number for the given cell, otherwise 0
 */
function getSmallestInputNum(rowIdx, colIdx, sudoku, initialVal) {
  const usedNumbers = _.uniq(getStakeholdersFromIndex(rowIdx, colIdx, sudoku)).sort();
  const availableInputs = _.range(initialVal + 1, 10);
  _.pullAll(availableInputs, usedNumbers);

  if (availableInputs.length === 0) {
    return 0;
  }
  return availableInputs[0];
}

/**
 * Brute force algorithm implementation to solve a given Sudoku.
 * This algorithm iterates through each cell sequentially, finds the smallest value
 * that can be added to that cell; if no solution exists for a given cell, it backtracks
 * to the previous cell and finds the next valid input for that given cell.
 *
 * We may be able to use this algorithm to generate Sudokus. All we need to do is
 * change the algorithm such that it searches through numbers randomly rather than sequentially.
 *
 * @param {Array.<Array.<number>>} inputSudoku row representation of the sudoku
 * @returns {Array.<Array.<number>>} solved sudoku
 */
function bruteForce(inputSudoku) {
  const sudoku = _.cloneDeep(inputSudoku);
  let index = 0;
  const visited = [];

  while (index < 81) {
    const rowIdx = Math.floor(index / 9);
    const colIdx = index % 9;

    const cell = sudoku[rowIdx][colIdx];
    const initialVal = sudoku[rowIdx][colIdx].value;

    if (!cell.fixed) {
      const inputNum = getSmallestInputNum(rowIdx, colIdx, sudoku, initialVal);

      if (inputNum !== 0) {
        cell.value = inputNum;
        if (!visited.includes(index)) {
          visited.push(index);
        }
        index += 1;
      } else if (initialVal === cell.value) {
        cell.value = 0;
        if (visited.includes(index)) {
          index = visited[visited.indexOf(index) - 1];
        } else {
          index = visited[visited.length - 1];
        }
      }
    } else {
      index += 1;
    }
  }
  return sudoku;
}

export default bruteForce;
