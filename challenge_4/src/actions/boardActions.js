const createBoard = () => ({
  type: 'CREATE_NEW_BOARD'
});

const updateBoard = (row, col) => ({
  type: 'REVEAL_CELL',
  row,
  col,
});

export { createBoard, updateBoard };
