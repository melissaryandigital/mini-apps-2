const revealCell = (b, row, col, newBoard) => {
  console.log(b, row, col, newBoard);
  let board = [];
  if (newBoard === undefined) {
    for (let i = 0; i < b.length; i += 1) {
      const r = [];
      for (let j = 0; j < b[i].length; j += 1) {
        r.push({ ...b[i][j] });
      }
      board.push(r);
    }
  } else {
    board = newBoard;
  }

  //console.log('revealCell board: ', board);

  board[row][col].revealed = true;

  // Reveal all tiles if mine hit
  if (board[row][col].mine === true) {
    console.log('A MINE!');
    for ( let z = 0; z < 10; z++)
    board[z].map( cell =>  cell.revealed = true );
    console.log(board);
  }

  // Recursively reveal cells
  if (board[row][col].marker === 0) {
    for (let rowIndex = row - 1; rowIndex <= row + 1; rowIndex += 1) {
      if (rowIndex < board.length && rowIndex >= 0) {
        for (let colIndex = col - 1; colIndex <= col + 1; colIndex += 1) {
          if ((colIndex < board[rowIndex].length && colIndex >= 0) && !(rowIndex === row && colIndex === col) && (board[rowIndex][colIndex].revealed !== true)) {
            console.log('recursive', b, rowIndex, colIndex, board);
            revealCell(b, rowIndex, colIndex, board);
          }
        }
      }
    }
  }

  return board;
};

export { revealCell };