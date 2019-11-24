import _ from 'lodash';

import { getStakeholdersFromIndex } from '../utils/extractors';

/**
 * Given the position of the cell, find another valid input that isn't used before.
 * If no valid values are found, then return 0.
 *
 * @param {number} rowIdx zero-based row index of the cell
 * @param {number} colIdx zero-based column index of the cell
 * @param {Array.<Array.<number>>} sudoku row representation of the sudoku
 * @param {object} retries a map of each cell's attempted numbers
 * @returns {number} random valid input number for the given cell, otherwise 0
 */
function getInputNum(rowIdx, colIdx, sudoku, retries) {
  const index = rowIdx * 9 + colIdx;
  const usedNumbers = _.uniq(getStakeholdersFromIndex(rowIdx, colIdx, sudoku, true));
  const triedNumbers = retries[index];
  const invalidNumbers = _.union(usedNumbers, triedNumbers).sort();
  const validNumbers = _.shuffle(_.difference(_.range(1, 10), invalidNumbers));

  if (validNumbers.length === 0) {
    const retry = retries[index];
    while (retry.length) {
      retry.pop();
    }
    return 0;
  }
  retries[index].push(validNumbers[0]);
  return validNumbers[0];
}

/**
 * Initialize the `retries` object mapping to keep track of attempted numbers.
 *
 * @returns {object} keys [0, 81] with empty array values
 */
function initializeRetries() {
  const retries = {};
  for (let i = 0; i < 81; i += 1) {
    retries[i] = [];
  }
  return retries;
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
  const retries = initializeRetries();

  while (index < 81) {
    const rowIdx = Math.floor(index / 9);
    const colIdx = index % 9;

    const cell = sudoku[rowIdx][colIdx];
    const initialVal = sudoku[rowIdx][colIdx].value;

    if (!cell.fixed) {
      const inputNum = getInputNum(rowIdx, colIdx, sudoku, retries);

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
