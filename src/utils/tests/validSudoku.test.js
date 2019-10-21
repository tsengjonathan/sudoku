import _ from 'lodash';

import { validSudokuArray } from '../validSudoku';

test('validSudokuArray - empty array', () => {
  expect(validSudokuArray([])).toBe(false);
});

test('validSudokuArray - invalid object types', () => {
  expect(validSudokuArray(0)).toBe(false);
  expect(validSudokuArray(null)).toBe(false);
  expect(validSudokuArray(undefined)).toBe(false);
});

test('validSudokuArray - valid array', () => {
  const orderedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const unorderedArray = _.shuffle(orderedArray);

  expect(validSudokuArray(orderedArray)).toBe(true);
  expect(validSudokuArray(unorderedArray)).toBe(true);
});

test('validSudokuArray - invalid array', () => {
  const shortArray = [1, 2, 3, 4, 5];
  const longArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const duplicateArray = [1, 1, 1, 1, 1, 1, 1, 1, 1];

  expect(validSudokuArray(shortArray)).toBe(false);
  expect(validSudokuArray(longArray)).toBe(false);
  expect(validSudokuArray(duplicateArray)).toBe(false);
});
