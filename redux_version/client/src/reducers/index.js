import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth";
import profileReducer from "./profile";
import movieReducer from "./movie";
import watchlistReducer from "./watchlist";
import dashboardReducer from "./dashboard";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  dash: dashboardReducer,
  user: profileReducer,
  movies: movieReducer,
  watchlist: watchlistReducer
});
