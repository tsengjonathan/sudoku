import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import Sudoku from '../Sudoku';
import NumberSelector from '../NumberSelector';

/**
 * Game component containing the Sudoku and the NumberSelector
 *
 * @returns {React.ReactElement} Game
 */
function Game() {
  const [numberSelected, setNumberSelected] = useState(0);

  return (
    <>
      <Sudoku numberSelected={numberSelected} />
      <NumberSelector onChange={setNumberSelected} />
    </>
  );
}

export default Game;
