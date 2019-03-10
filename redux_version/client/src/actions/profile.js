import axios from "axios";
import { PROFILE_GET_DATA } from "./types";

export const getProfile = () => {
  return async dispatch => {
    try {
      const res = await axios.get("http://localhost:5000/profile");

      dispatch({
        type: PROFILE_GET_DATA,
        payload: res.data.profile
      });
    } catch (err) {
      console.error("err", err);
    }
  };
};
