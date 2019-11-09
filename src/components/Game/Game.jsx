import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import Sudoku from '../Sudoku';
import NumberSelector from '../NumberSelector';

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
