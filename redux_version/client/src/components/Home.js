import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMovies } from "../actions/movie";

class Home extends Component {
  state = {
    // loading: true
  };

  async componentDidMount() {
    this.props.getMovies();
  }

  render() {
    // console.log(this.props.movies);
    const { movies } = this.props;
    const moviesList = movies.length ? (
      movies.map(movie => {
        return (
          <li className="movies-list__item" key={movie.imdbID}>
            {/* <img src={movie.Poster} alt={movie.Title} /> */}
            <Link className="movies-list__item__link" to={movie.imdbID}>
              {movie.Poster !== "N/A" ? (
                <img src={movie.Poster} alt={movie.Title} />
              ) : (
                <Fragment>
                  <div>Poster Not Found</div>
                  <div>
                    Title: <span>{movie.Title}</span>
                  </div>
                </Fragment>
              )}
            </Link>
          </li>
        );
      })
    ) : (
      <div className="center">No movies to show</div>
    );

    return (
      <div className="main-content">
        <div className="container">
          <ul className="movies-list">{moviesList}</ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies.movies
  };
}

export default connect(
  mapStateToProps,
  { getMovies }
)(Home);
