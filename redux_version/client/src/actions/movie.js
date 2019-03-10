import axios from "axios";
import { MOVIES_GET_DATA } from "./types";

export const getMovies = () => {
  return async dispatch => {
    try {
      const res = await axios.get("http://localhost:5000/movies");

      dispatch({
        type: MOVIES_GET_DATA,
        payload: res.data.movies
      });
    } catch (err) {
      console.error("err", err);
    }
  };
};
