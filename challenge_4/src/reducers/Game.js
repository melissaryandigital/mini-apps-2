const gameStateReducer = (state = null, action) => {
  switch (action.type) {
    case 'START_NEW_GAME':
      return {
        ...state
      };

    default:
      return state;
  }
};

export default gameStateReducer;
