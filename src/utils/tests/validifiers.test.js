import _ from 'lodash';

import { validSudokuMatrix, validSudokuArray } from '../validifiers';

const generateEmptySudokuRow = () => _.times(9, _.constant(0));

describe('validSudokuMatrix', () => {
  test('rejects an empty array', () => {
    expect(validSudokuMatrix([])).toBe(false);
  });

  test('rejects invalid object types', () => {
    expect(validSudokuMatrix(0)).toBe(false);
    expect(validSudokuMatrix(null)).toBe(false);
    expect(validSudokuMatrix(undefined)).toBe(false);
  });

  test('rejects invalid matrix variations', () => {
    const emptySudokuRow = _.times(9, _.constant(0));
    const emptySudokuMatrix = _.times(9, generateEmptySudokuRow);
    emptySudokuMatrix[_.random(0, 8)].shift();
    expect(validSudokuMatrix(emptySudokuRow)).toBe(false);
    expect(validSudokuMatrix(emptySudokuMatrix)).toBe(false);
  });

  test('accepts valid matrices', () => {
    const emptySudokuMatrix = _.times(9, generateEmptySudokuRow);
    expect(validSudokuMatrix(emptySudokuMatrix)).toBe(true);
  });
});

describe('validSudokuArray', () => {
  test('rejects an empty array', () => {
    expect(validSudokuArray([])).toBe(false);
  });

  test('rejects invalid object types', () => {
    expect(validSudokuArray(0)).toBe(false);
    expect(validSudokuArray(null)).toBe(false);
    expect(validSudokuArray(undefined)).toBe(false);
  });

  test('accepts valid array', () => {
    const orderedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const unorderedArray = _.shuffle(orderedArray);

    expect(validSudokuArray(orderedArray)).toBe(true);
    expect(validSudokuArray(unorderedArray)).toBe(true);
  });

  test('rejects invalid arrays', () => {
    const shortArray = [1, 2, 3, 4, 5];
    const longArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const duplicateArray = [1, 1, 1, 1, 1, 1, 1, 1, 1];

    expect(validSudokuArray(shortArray)).toBe(false);
    expect(validSudokuArray(longArray)).toBe(false);
    expect(validSudokuArray(duplicateArray)).toBe(false);
  });
});
