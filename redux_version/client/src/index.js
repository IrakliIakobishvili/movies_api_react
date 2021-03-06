import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import axios from "axios";
import "./index.css";

import registerServiceWorker from "./registerServiceWorker";
import App from "./components/App";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Movie from "./components/Movie";
import Cart from "./components/Cart";
import reducers from "./reducers";

import authGuard from "./components/HOCs/authGuard";

const jwtToken = localStorage.getItem("JWT_TOKEN");
axios.defaults.headers.common["Authorization"] = jwtToken;

const initialState = {
  auth: {
    token: jwtToken,
    isAuthenticated: jwtToken ? true : false
  }
};
const middleware = [reduxThunk];

ReactDOM.render(
  <Provider
    store={createStore(
      reducers,
      initialState,
      compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    )}
  >
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/dashboard" component={authGuard(Dashboard)} />
          <Route exact path="/profile" component={authGuard(Profile)} />
          <Route exact path="/:id" component={Movie} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
registerServiceWorker();
