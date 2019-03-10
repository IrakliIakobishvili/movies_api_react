import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../context";
// import SourceLinks from "./SourceLinks";
// const key = "d8e07904";
// const source = "inception";

const APIURL = (source, key) => {
  return `http://www.omdbapi.com/?s=${source}&apikey=${key}`;
};
export default class Movies extends Component {
  // state = {
  //   list: null,
  //   key: "d8e07904",
  //   source: "inception",
  //   loading: true
  // };

  fetchMovies = (source, callBack) => {
    fetch(APIURL(source, "d8e07904"))
      .then(response => response.json())
      .then(movies => {
        // this.setState({ list: movies.Search, loading: false });
        callBack(movies.Search);
      })
      .catch(error => console.error(error));
  };
  // componentDidMount() {
  //   // this.fetchMovies(this.state.source);
  //   // console.log(this);
  // }
  // componentWillReceiveProps(props) {
  //   if (this.state.source !== props.source) {
  //     this.setState({ loading: true, source: props.source });
  //     this.fetchNews();
  //   }
  // }

  render() {
    return (
      <ul className="movies-list">
        <Consumer>
          {context => (
            <Fragment>
              {this.fetchMovies("inception", context.handleMoviesLoading)}
              {context.state.loading ? (
                <li>Loading...</li>
              ) : context.state.movies.length ? (
                context.state.movies.map(movie => {
                  return (
                    <li
                      className="movies-list__item"
                      key={movie.imdbID}
                      title={movie.Title}
                    >
                      <Link
                        className="movies-list__item__link"
                        to={`/movie/` + movie.imdbID}
                      >
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
                <li style={{ textAlign: "center" }}>Empty List</li>
              )}
            </Fragment>
          )}
        </Consumer>
      </ul>
      // <div className="news--list">
      //   <h2 className="news--title">News list</h2>
      //   <div className="newses">
      //     <h2 style={{ display: this.state.loading ? "block" : "none" }}>
      //       News Loading...
      //     </h2>
      //     <div
      //       className="news--box"
      //       style={{ display: !this.state.loading ? "block" : "none" }}
      //     >
      //       {this.state.list &&
      //         this.state.list.articles.map(article => {
      //           return (
      //             <article key={article.title} className="news--item">
      //               <h1>{article.title}</h1>
      //               <a href={article.url}>
      //                 <img
      //                   src={article.urlToImage}
      //                   alt={article.title}
      //                   style={{ width: 300 }}
      //                 />
      //               </a>
      //               <p>{article.content}</p>
      //             </article>
      //           );
      //         })}
      //     </div>
      //   </div>
      // </div>
    );
  }
}
