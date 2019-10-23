import _ from 'lodash';

import { rowsToColumns, rowsToBlocks } from '../adaptors';

const generateRow = () => _.times(9, _.constant(0));

describe('rowsToColumns', () => {
  test('rejects empty array', () => {
    expect(() => { rowsToColumns([]); }).toThrow();
  });

  test('rejects invalid types', () => {
    expect(() => { rowsToColumns(null); }).toThrow();
    expect(() => { rowsToColumns({}); }).toThrow();
  });

  test('converts valid sudokus', () => {
    const emptySudoku = _.times(9, generateRow);
    expect(rowsToColumns(emptySudoku)).toStrictEqual(emptySudoku);

    const row = _.random(0, 8);
    const col = _.random(0, 8);
    const anotherSudoku = _.clone(emptySudoku);
    anotherSudoku[row][col] = 1;

    const anotherColSudoku = rowsToColumns(anotherSudoku);
    expect(anotherSudoku[row][col]).toBe(anotherColSudoku[col][row]);
  });
});

describe('rowsToBlocks', () => {
  test('rejects empty array', () => {
    expect(() => { rowsToBlocks([]); }).toThrow();
  });

  test('rejects invalid types', () => {
    expect(() => { rowsToBlocks(null); }).toThrow();
    expect(() => { rowsToBlocks({}); }).toThrow();
  });

  test('converts valid sudokus', () => {
    const emptySudoku = _.times(9, generateRow);
    expect(rowsToBlocks(emptySudoku)).toStrictEqual(emptySudoku);

    const startIndices = [0, 3, 6];
    const row = _.sample(startIndices);
    const col = _.sample(startIndices);
    const anotherSudoku = _.clone(emptySudoku);

    for (let i = row; i < row + 3; i += 1) {
      for (let j = col; j < col + 3; j += 1) {
        anotherSudoku[i][j] = 1;
      }
    }

    const blockIdx = row + (col / 3);
    const anotherColSudoku = rowsToBlocks(anotherSudoku);
    const block = anotherColSudoku[blockIdx];
    expect(block).toStrictEqual(_.times(9, _.constant(1)));
  });
});
