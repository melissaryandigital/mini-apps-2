import React from 'react';

import BoardContainer from '../containers/BoardContainer';

const App = ({ gameOver, startNewGame }) => (
  <div className="app">
    <h1>Minesweeper</h1>
    <div className="field">
      <div className="container">
        <BoardContainer />
      </div>
    </div>
    <div className="button-wrapper">
      <button onClick={() => { startNewGame(); }}>NEW GAME</button>
    </div>
  </div>
);

export default App;
