import React, { Component } from "react";
import { connect } from "react-redux";

import { getProfile } from "../actions/profile";

class Profile extends Component {
  async componentDidMount() {
    this.props.getProfile();
  }

  render() {
    return (
      <div>
        This is profile page
        <br />
        profile staff: <h3>{this.props.profile}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.user.profile
  };
}

export default connect(
  mapStateToProps,
  { getProfile }
)(Profile);
