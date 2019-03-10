import React, { Component, Fragment } from "react";
import Movie from "./Movies";

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-content">
          <div className="container">
            <Movie />
          </div>
        </div>
      </Fragment>
    );
  }
}
