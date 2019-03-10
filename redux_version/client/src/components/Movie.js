import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Redirect } from "react-router-dom";

import { addToWatchlist } from "../actions/watchlist";

class Movie extends Component {
  //   watchlistHandler = (id) => {
  //     this.props.addToWatchlist(id)
  //   };
  render() {
    const { targetMovie } = this.props;
    const movieBox = targetMovie ? (
      <Fragment>
        <div className="img-cont">
          <img src={targetMovie.Poster} alt={targetMovie.Title} />
        </div>
        <ul>
          <li>{targetMovie.Title}</li>
          <li>{targetMovie.Year}</li>

          {this.props.isAuth ? (
            <button
              onClick={() => this.props.addToWatchlist(targetMovie.imdbID)}
            >
              Add to Watchlist
            </button>
          ) : null}

          <li>
            {/* <button
              onClick={() => this.props.addToWatchlist(targetMovie.imdbID)}
            >
              Add to Watchlist
            </button> */}
          </li>
        </ul>
      </Fragment>
    ) : (
      <Redirect to="/" />
    );
    return (
      <div className="movie-page">
        <div className="container">{movieBox}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  targetMovie: _.find(state.movies.movies, {
    imdbID: ownProps.match.params.id
  }),
  isAuth: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { addToWatchlist }
)(Movie);

// function mapStateToProps(state) {
//     return {
//       isAuth: state.auth.isAuthenticated
//     };
// }
