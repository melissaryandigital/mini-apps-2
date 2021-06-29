import { combineReducers } from 'redux';
import Board from './Board.js';
import Game from './Game.js';

const rootReducer = combineReducers({
  Board,
  Game
});

export default rootReducer;