import React, { createContext, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { toaster } from 'evergreen-ui';

import { empty, random } from '../puzzles';
import bruteForce from '../solvers/bruteForce';
import { getStakeholdersFromIndex } from '../utils/extractors';

const randomSudoku = random();

/**
 * Reducer function to handle Sudoku logic
 *
 * @param {Array.<Array.<number>>} state sudoku state
 * @param {object} action action to trigger the state change
 * @returns {Array.<Array.<number>>} new sudoku state based on the action given
 */
function reducer(state, action) {
  switch (action.type) {
    case 'assign': {
      const { rowIdx, colIdx, val } = action;
      const stakeholders = getStakeholdersFromIndex(rowIdx, colIdx, state, false);

      if (stakeholders.every((stakeholder) => stakeholder.value !== val)) {
        const newSudoku = state.slice();
        const cell = newSudoku[rowIdx][colIdx];
        cell.value = val;
        return newSudoku;
      }
      toaster.warning('Cannot set value to cell');
      return state;
    }
    case 'solve':
      return bruteForce(state);
    case 'randomize':
      return random();
    case 'generate':
      return bruteForce(empty);
    case 'empty':
      return empty;
    case 'reset':
      return randomSudoku;
    default:
      return state;
  }
}

const SudokuContext = createContext();

/**
 * Provider for SudokuContext
 *
 * @param {React.ReactElement} children children components to pass context to
 * @returns {React.ReactElement} children components wrapped in a context provider
 */
function SudokuContextProvider({ children }) {
  const [sudoku, action] = useReducer(reducer, _.cloneDeep(randomSudoku));
  const [numberSelected, setNumberSelected] = useState(0);

  // console.debug('Solved Sudoku', bruteForce(sudoku));

  return (
    <SudokuContext.Provider value={{
      sudoku, action, numberSelected, setNumberSelected,
    }}
    >
      { children }
    </SudokuContext.Provider>
  );
}

SudokuContextProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array.isRequired,
};

export {
  SudokuContext,
  SudokuContextProvider,
};
