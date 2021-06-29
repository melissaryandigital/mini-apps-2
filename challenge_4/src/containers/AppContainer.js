import { connect } from 'react-redux';

import App from '../components/App';
import { startNewGame } from '../actions/gameActions';
import { createBoard } from '../actions/boardActions';


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

  startNewGame: () => {
    dispatch(startNewGame());
    dispatch(createBoard());
  },
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
