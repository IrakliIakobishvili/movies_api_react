import React from "react";
import { Consumer } from "../context";
import { Route, Link } from "react-router-dom";
import Search from "./Search";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <h1>
          <Link className="logo" to="/">
            MOVIES
          </Link>
          {/* <NavLink to="/" exact activeClassName="active">
                MOVIES
              </NavLink> */}
        </h1>
        <nav className="top-nav">
          <ul className="top-nav__list">
            <li className="top-nav__list__item">
              <Route path="/" component={Search} exact />
            </li>
            <li className="top-nav__list__item">
              <Consumer>
                {context => (
                  <Link className="loginBtn" to="/login">
                    Login
                  </Link>
                )}
              </Consumer>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
