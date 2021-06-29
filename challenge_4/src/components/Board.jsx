import React from 'react';
import Row from './Row';

const Board = ({ board, revealCell}) => (
  <ol className="minefield">
    {board.map((row, i) => (
      <Row key={i} row={row} rowNum={i} revealCell={revealCell} />
    ))}
  </ol>
);

export default Board;
