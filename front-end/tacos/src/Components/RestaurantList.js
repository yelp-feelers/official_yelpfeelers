import React, { Component } from "react";
import { connect } from "react-redux";
import { getTacos } from "../Actions/DataFetching";

import Restaurant from "./Restaurant";

class RestaurantList extends Component {
  state = {
    yelpData: this.props.yelpData
  };
  componentDidMount() {
    this.props.getTacos();
  }

  render() {
    return (
      <>
        <h1>PROTECTED TACO ROUTE</h1>
        <div className="main-container">
          {this.props.yelpData.map(restaurant => (
            <Restaurant restaurant={restaurant} />
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  yelpData: state.yelpData
});

export default connect(
  mapStateToProps,
  { getTacos }
)(RestaurantList);
