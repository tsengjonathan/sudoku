import _ from 'lodash';

import { getRowFromIndex, getColumnFromIndex, getBlockFromIndex } from '../extractors';
import sudoku from '../../puzzles/11-03-2019';

const row = [
  { value: 1, fixed: true },
  { value: 0, fixed: false },
  { value: 0, fixed: false },
  { value: 7, fixed: true },
  { value: 0, fixed: false },
  { value: 9, fixed: true },
  { value: 0, fixed: false },
  { value: 0, fixed: false },
  { value: 0, fixed: false },
];

const column = [
  { value: 1, fixed: true },
  { value: 5, fixed: true },
  { value: 7, fixed: true },
  { value: 0, fixed: false },
  { value: 9, fixed: true },
  { value: 6, fixed: true },
  { value: 0, fixed: false },
  { value: 0, fixed: false },
  { value: 0, fixed: false },
];

const block = [
  { value: 1, fixed: true },
  { value: 0, fixed: false },
  { value: 0, fixed: false },
  { value: 5, fixed: true },
  { value: 8, fixed: true },
  { value: 0, fixed: false },
  { value: 7, fixed: true },
  { value: 0, fixed: false },
  { value: 6, fixed: true },
];

describe('getRowFromIndex', () => {
  test('returns the corresponding row', () => {
    expect(getRowFromIndex(0, 0, sudoku)).toStrictEqual(row);
    expect(getRowFromIndex(0, 0, sudoku)).not.toBe(row);
  });
});

describe('getColumnFromIndex', () => {
  test('returns the corresponding column', () => {
    expect(getColumnFromIndex(0, 0, sudoku)).toStrictEqual(column);
    expect(getColumnFromIndex(0, 0, sudoku)).not.toBe(column);
  });
});

describe('getBlockFromIndex', () => {
  test('returns the corresponding block', () => {
    expect(getBlockFromIndex(0, 0, sudoku)).toStrictEqual(block);
    expect(getBlockFromIndex(0, 0, sudoku)).not.toBe(block);
  });
});
