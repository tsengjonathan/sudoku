import React, { useState } from 'react';
import { Pane, majorScale } from 'evergreen-ui';

import Sudoku from '../Sudoku';
import NumberSelector from '../NumberSelector';
import { SudokuContextProvider } from '../../contexts/SudokuContext';

/**
 * Game component containing the Sudoku and the NumberSelector
 *
 * @returns {React.ReactElement} Game
 */
function Game() {
  const [numberSelected, setNumberSelected] = useState(0);

  return (
    <Pane display="flex">
      <SudokuContextProvider>
        <Sudoku numberSelected={numberSelected} />
        <NumberSelector onChange={setNumberSelected} marginLeft={majorScale(1)} />
      </SudokuContextProvider>
    </Pane>
  );
}

export default Game;
