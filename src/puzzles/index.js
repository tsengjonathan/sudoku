import _ from 'lodash';

import empty from './empty';
import puzzle1 from './11-03-2019';
import puzzle2 from './11-23-2019';

/**
 * Selects a random sudoku from the directory that's not empty.
 *
 * @returns {Array.<Array.<number>>} a random sudoku
 */
function random() {
  return _.sample([puzzle1, puzzle2]);
}

export {
  empty,
  random,
};
