import axios from "axios";
import { ADD_MOVIE_TO_WATCHLIST } from "./types";

export const addToWatchlist = id => {
  return async dispatch => {
    try {
      //   const res = await axios.get("http://localhost:5000/profile");

      dispatch({
        type: ADD_MOVIE_TO_WATCHLIST,
        payload: id
      });
    } catch (err) {
      console.error("err", err);
    }
  };
};

// export const getFromWatchlist = () => {
//   return async dispatch => {
//     try {
//       const res = await axios.get("http://localhost:5000/profile");

//       dispatch({
//         type: ADD_MOVIE_TO_WATCHLIST,
//         payload: res.data.profile
//       });
//     } catch (err) {
//       console.error("err", err);
//     }
//   };
// };
