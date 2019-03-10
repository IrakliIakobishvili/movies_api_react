import { MOVIES_GET_DATA } from "../actions/types";

const DEFAULT_STATE = {
  movies: []
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case MOVIES_GET_DATA:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};
