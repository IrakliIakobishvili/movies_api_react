import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addToWatchlist } from "../actions/watchlist";

class Cart extends Component {
  //   async componentDidMount() {
  //     this.props.getProfile();
  //   }
  render() {
    // console.log(this.props.watchlist.length);
    return (
      <Link to="/cart" style={{ color: "red", fontWeight: "bold" }}>
        <span>Total </span>
        {this.props.watchlist.length}
      </Link> ///sxvanairad!!!
    );
  }
}

function mapStateToProps(state) {
  return {
    watchlist: state.watchlist.movies
  };
}

export default connect(
  mapStateToProps,
  { addToWatchlist }
)(Cart);
