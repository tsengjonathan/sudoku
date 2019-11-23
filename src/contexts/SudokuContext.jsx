import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { empty, random } from '../puzzles';

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
      const newSudoku = state.slice();
      const cell = newSudoku[rowIdx][colIdx];
      cell.value = val;
      return newSudoku;
    }
    case 'randomize':
      return random();
    case 'reset':
      return empty;
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
  const [sudoku, action] = useReducer(reducer, random());

  return (
    <SudokuContext.Provider value={{ sudoku, action }}>
      { children }
    </SudokuContext.Provider>
  );
}

SudokuContextProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object.isRequired,
};

export {
  SudokuContext,
  SudokuContextProvider,
};
