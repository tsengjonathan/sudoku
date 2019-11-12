import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Pane, majorScale } from 'evergreen-ui';

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
    <Pane display="flex">
      <Sudoku numberSelected={numberSelected} />
      <NumberSelector onChange={setNumberSelected} marginLeft={majorScale(1)} />
    </Pane>
  );
}

export default Game;
