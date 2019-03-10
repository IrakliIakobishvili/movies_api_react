// import React from "react";
// import axios from 'axios';

// // const fetchMovie = (id) => {
// //   fetch(`http://www.omdbapi.com/?s=${id}&apikey=d8e07904`)
// //     .then(response => response.json())
// //     .then(result => {
// //       if (result.Response === "True") {
// //         this.setState({ movies: result.Search });
// //       } else if (result.Response === "False") {
// //         this.setState({ movies: [] });
// //       }
// //     })
// //     .catch(error => console.error(error));
// // };

// const Movie = props => {
//   return (
//     <div className="movie">
//       <div className="container">
//         {/* <li>{console.log(props.match.params.id)}</li> */}
//         <div className="movie-box">
//           {console.log("ss")}
//           {/* <div className="img-cont">
//                 <img src="" alt=""/>
//             </div>
//             <ul>
//                 <li></li>
//             </ul> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Movie;

import React, { Component } from "react";
import axios from "axios";

export default class Movie extends Component {
  state = {
    movie: "",
    loading: true
  };

  componentDidMount() {
    axios
      .get(
        `http://www.omdbapi.com/?i=${
          this.props.match.params.id
        }&apikey=d8e07904`
      )
      .then(res => {
        res.data.Response === "True"
          ? this.setState({ movie: res.data })
          : this.setState({ loading: false });
      });
  }

  render() {
    const {
      Title,
      Poster,
      Genre,
      Language,
      Director,
      Country,
      Released,
      Website,
      Year,
      Writer,
      imdbRating
    } = this.state.movie;
    return (
      <div className="movie">
        <div className="container">
          {this.state.movie ? (
            <div className="movie-box">
              <div className="movie-box__img-cont">
                {Poster !== "N/A" ? (
                  <img src={Poster} alt={Title} />
                ) : (
                  <img src="../images/default_poster.jpg" alt="" />
                )}
              </div>
              <ul className="movie-box__list">
                <li className="movie-box__list__item">
                  <h1>{Title}</h1>
                </li>
                <li className="movie-box__list__item">
                  <span>Genre:</span> {Genre}
                </li>
                <li className="movie-box__list__item">
                  <span>Language:</span> {Language}
                </li>
                <li className="movie-box__list__item">
                  <span>Director:</span> {Director}
                </li>
                <li className="movie-box__list__item">
                  <span>Country:</span> {Country}
                </li>
                <li className="movie-box__list__item">
                  <span>Released:</span> {Released}
                </li>
                <li className="movie-box__list__item">
                  <span>Writer:</span> {Writer}
                </li>
                <li className="movie-box__list__item">
                  <span>Year:</span> {Year}
                </li>
                <li className="movie-box__list__item">
                  <span>imdbRating:</span> {imdbRating}
                </li>
                <li className="movie-box__list__item">
                  <span>Website:</span>{" "}
                  {Website !== "N/A" ? (
                    <a target="_blank" rel="noopener noreferrer" href={Website}>
                      {Website}
                    </a>
                  ) : (
                    "N/A"
                  )}
                </li>
                <li className="movie-box__list__item">
                  <button className="movie-box__list__item__btn">
                    Add to Watchlist
                  </button>
                </li>
              </ul>
            </div>
          ) : this.state.loading ? (
            <p>Loading...</p>
          ) : (
            <p>Not Found</p>
          )}
        </div>
      </div>
    );
  }
}
