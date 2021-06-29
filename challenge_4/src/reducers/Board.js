import { createMinefield } from '../helpers/createMinefield.js';
import { revealCell } from '../helpers/revealCell.js';


const BoardReducer = (state = null, action) => {
  switch (action.type) {
    case 'CREATE_NEW_BOARD':
      return createMinefield(action.rows, action.cols, action.mines);
    case 'REVEAL_CELL':
      return revealCell(state, action.row, action.col);
    default:
      return [[]];
  }
};

export default BoardReducer;