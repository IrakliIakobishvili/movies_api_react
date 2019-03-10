import React, { Component } from "react";
export const MyContext = React.createContext();

const moviesFromDB = [
  {
    Title: "Inception",
    Year: "2010",
    imdbID: "tt1375666",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
  },
  {
    Title: "Inception: The Cobol Job",
    Year: "2010",
    imdbID: "tt5295894",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_SX300.jpg"
  },
  {
    Title: "Inception: Motion Comics",
    Year: "2010–",
    imdbID: "tt1790736",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGRkYzkzZmEtY2YwYi00ZTlmLTgyMTctODE0NTNhNTVkZGIxXkEyXkFqcGdeQXVyNjE4MDMwMjk@._V1_SX300.jpg"
  },
  {
    Title: "Inception",
    Year: "2014",
    imdbID: "tt7321322",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWJmYWJmNWMtZTBmNy00M2MzLTg5ZWEtOGU5ZWRiYTE0ZjVmXkEyXkFqcGdeQXVyNzkyOTM2MjE@._V1_SX300.jpg"
  },
  {
    Title: "Inception: 4Movie Premiere Special",
    Year: "2010",
    imdbID: "tt1686778",
    Type: "movie",
    Poster: "N/A"
  },
  {
    Title: "Inception: In 60 Seconds",
    Year: "2013",
    imdbID: "tt3262402",
    Type: "movie",
    Poster: "N/A"
  },
  {
    Title: "On Inception (TOI and MOI)",
    Year: "2011",
    imdbID: "tt4341988",
    Type: "movie",
    Poster: "N/A"
  },
  {
    Title: "Needle Drop Inception",
    Year: "2016",
    imdbID: "tt4650070",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzJkYmU4MzUtN2ZhOS00MWYzLWI4YTUtNTQ3MWJkZGQ4ZTliXkEyXkFqcGdeQXVyMTIxMzc3MDQ@._V1_SX300.jpg"
  },
  {
    Title: "Bikini Inception",
    Year: "2015",
    imdbID: "tt8269586",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDk3NTNmNGEtOWJkYi00NGEyLThkZDQtOTBlZmRhN2IwYTk0XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg"
  },
  {
    Title: "Inception: Jump Right Into the Action",
    Year: "2010",
    imdbID: "tt5295990",
    Type: "movie",
    Poster: "N/A"
  }
];

export class Provider extends Component {
  state = {
    movies: [],
    initialLoad: true,
    loading: true,
    users: ["irakli", "mt"]
  };
  handleMoviesLoading = newMovies => {
    if (this.state.initialLoad) {
      this.setState({
        ...this.state,
        movies: newMovies,
        initialLoad: false,
        loading: false
      });
    }
  };
  fetch = event => {
    // console.log(event.target.value);
    if (event.target.value.trim() !== "") {
      fetch(`http://www.omdbapi.com/?s=${event.target.value}&apikey=d8e07904`)
        .then(response => response.json())
        .then(result => {
          if (result.Response === "True") {
            this.setState({ movies: result.Search });
          } else if (result.Response === "False") {
            this.setState({ movies: [] });
          }
        })
        .catch(error => console.error(error));
    } else {
      //   this.handleMoviesLoading();
      this.setState({ movies: moviesFromDB });
    }
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          handleMoviesLoading: this.handleMoviesLoading,
          handleLoadMovies: this.fetch
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export class Consumer extends Component {
  render() {
    return <MyContext.Consumer>{this.props.children}</MyContext.Consumer>;
  }
}

// import React, { Component, createContext } from "react";
// const { Provider, Consumer } = createContext({
//   movies: [],
//   users: []
// });

// export class Provider extends Component {
//   state = {
//     movies: ["d", "g"],
//     users: ["irakli", "m"]
//   };
//   render() {
//     return (
//       <Provider
//         value={{
//           state: this.state,
//           handleLogin: () => {
//             console.log("Login Fn");
//           }
//         }}
//       >
//         {this.props.children}
//       </Provider>
//     );
//   }
// }

// export class Consumer extends Component {
//   render() {
//     return <Consumer>{this.props.children}</Consumer>;
//   }
// }
