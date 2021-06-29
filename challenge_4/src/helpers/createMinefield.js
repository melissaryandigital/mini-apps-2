const createMinefield = () => {

  // Create the board
  const board = [];
  for (let i = 0; i < 10; i += 1) {
    const temp = [];
    for (let j = 0; j < 10; j += 1) {
      temp.push({
        mine: false,
        marker: 0,
        revealed: false,
      });
    }
    board.push(temp);
  }
  //console.log(`board: , ${board}`);
  // Create array of random numbers
  const mineLocations = [];
  while (mineLocations.length < 10) {
    const random = Math.floor(Math.random() * 101);
    // If this number has already been used do not add it again
    if (mineLocations.indexOf(random) === -1) {
      mineLocations.push(random);
    }
  }

  //console.log(mineLocations);

  // Iterate through
  for (let k = 0; k < 10; k++) {
    const row = Math.floor((mineLocations[k]) / 10);
    const col = (mineLocations[k] % 10);

    // Set the cell mine to true and marker to X
    board[row][col].mine = true;
    board[row][col].marker = 'X';

    //
    for (let rowIndex = row - 1; rowIndex <= row + 1; rowIndex += 1) {
      //console.log(`row: ${row}, col: ${col}`);
      if (rowIndex >= 0 && rowIndex < 10) {

        for (let colIndex = col - 1; colIndex <= col + 1; colIndex += 1) {
          if ((colIndex < 10 && colIndex >= 0) && !(rowIndex === row && colIndex === col) && board[rowIndex][colIndex].mine === false) {
            board[rowIndex][colIndex].marker += 1;
          }
        }

      }
    }
  }
  return board;
};

export { createMinefield };