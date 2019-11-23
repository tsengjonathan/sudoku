import React, { createContext, useReducer } from 'react';

import { empty, random } from '../puzzles';

function reducer(state, action) {
  switch (action.type) {
    case 'assign': {
      const { rowIdx, colIdx, val } = action;
      const newSudoku = state.slice();
      newSudoku[rowIdx][colIdx] = val;
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
 *
 */
function SudokuContextProvider({ children }) {
  const [sudoku, action] = useReducer(reducer, empty.rows);

  return (
    <SudokuContext.Provider value={{ sudoku, action }}>
      { children }
    </SudokuContext.Provider>
  );
}

export {
  SudokuContext,
  SudokuContextProvider,
};
