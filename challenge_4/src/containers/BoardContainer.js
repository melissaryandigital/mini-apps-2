import { connect } from 'react-redux';

import Board from '../components/Board';
import { updateBoard } from '../actions/boardActions';

const mapStateToProps = state => ({
  board: state.Board,
});

const mapDispatchToProps = dispatch => ({
  revealCell: (row, col) => {
    dispatch(updateBoard(row, col));
  },
});

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export default BoardContainer;