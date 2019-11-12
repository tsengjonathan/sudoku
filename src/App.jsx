import React from 'react';
import './App.css';

import Game from './components/Game';

/**
 * Parent wrapper for all React code
 *
 * @returns {React.ReactElement} App
 */
function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
