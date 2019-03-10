import React, { Fragment } from "react";
import { Consumer } from "../context";

export default function Search() {
  return (
    <Consumer>
      {context => (
        <Fragment>
          <input
            onKeyUp={event => context.handleLoadMovies(event)}
            type="text"
            id="search"
            placeholder="Search"
            name="search"
          />
        </Fragment>
      )}
    </Consumer>
  );
}
