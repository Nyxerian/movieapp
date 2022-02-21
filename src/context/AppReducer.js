export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "ADD_MOVIE_TO_FAVES":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
        faves: [action.payload, ...state.faves],
      };
    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        faves: state.faves.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_FROM_FAVES":
      return {
        ...state,
        faves: state.faves.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};
