import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";
import Cart from "./Cart";

class Header extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    this.props.signOut();
  }

  render() {
    return (
      <header className="main-header">
        <div className="container">
          <Link className="logo" to="/">
            MOVIES
          </Link>

          <div className="">
            <ul className="">
              <li className="nav-item">
                <Link className="" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>

            <ul className="auth-list">
              {!this.props.isAuth
                ? [
                    <li className="" key="signup">
                      <Link className="auth-list__link" to="/signup">
                        Sign Up
                      </Link>
                    </li>,
                    <li className="nav-item" key="signin">
                      <Link className="" to="/signin">
                        Sign In
                      </Link>
                    </li>
                  ]
                : null}

              {this.props.isAuth
                ? [
                    <Cart key="cart" />,
                    <li key="logout" className="nav-item">
                      <Link
                        className="nav-link"
                        to="/signout"
                        onClick={this.signOut}
                      >
                        Sign Out
                      </Link>
                    </li>
                  ]
                : null}
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuthenticated
  };
}

export default connect(
  mapStateToProps,
  actions
)(Header);
