import _ from 'lodash';

import { getRowFromIndex, getColumnFromIndex, getBlockFromIndex } from '../extractors';
import sudoku from '../../puzzles/11-03-2019';

describe('getRowFromIndex', () => {
  test('returns the corresponding row', () => {
    const idx = _.random(0, 8);
    const row = sudoku.rows[idx];
    expect(getRowFromIndex(idx, 0, sudoku.rows)).toStrictEqual(row);
    expect(getRowFromIndex(idx, 0, sudoku.rows)).not.toBe(row);
  });
});

describe('getColumnFromIndex', () => {
  test('returns the corresponding column', () => {
    const idx = _.random(0, 8);
    const column = sudoku.columns[idx];
    expect(getColumnFromIndex(0, idx, sudoku.rows)).toStrictEqual(column);
    expect(getColumnFromIndex(0, idx, sudoku.rows)).not.toBe(column);
  });
});

describe('getBlockFromIndex', () => {
  test('returns the corresponding block', () => {
    const rowIdx = _.random(0, 8);
    const colIdx = _.random(0, 8);
    const blockIdx = rowIdx - (rowIdx % 3) + Math.floor(colIdx / 3);
    const block = sudoku.blocks[blockIdx];
    expect(getBlockFromIndex(rowIdx, colIdx, sudoku.rows)).toStrictEqual(block);
    expect(getBlockFromIndex(rowIdx, colIdx, sudoku.rows)).not.toBe(block);
  });
});
