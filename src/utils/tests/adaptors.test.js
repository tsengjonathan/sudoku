import _ from 'lodash';

import { rowsToColumns } from '../adaptors';

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
