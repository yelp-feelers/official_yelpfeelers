import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class RestaurantList extends Component {
  render() {
    return (
      <div>
        <h1>THIS IS A PROTECTED LIST OF TACO JOINTS</h1>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    {}
  )(RestaurantList)
);
