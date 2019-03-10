import { ADD_MOVIE_TO_WATCHLIST } from "../actions/types";

const DEFAULT_STATE = {
  movies: []
};

// export default (state = DEFAULT_STATE, action) => {
//   switch (action.type) {
//     case ADD_MOVIE_TO_WATCHLIST:
//       return { ...state, movies: [...state.movies, action.payload] };
//     default:
//       return state;
//   }
// };

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_MOVIE_TO_WATCHLIST:
      return {
        ...state,
        movies: state.movies.includes(action.payload)
          ? state.movies.filter(id => id !== action.payload)
          : [...state.movies, action.payload]
      };
    default:
      return state;
  }
};
