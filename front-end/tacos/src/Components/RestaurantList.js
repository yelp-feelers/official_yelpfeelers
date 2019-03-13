import React, { Component } from "react";
import { connect } from "react-redux";
import { getRestaurants } from "../Actions/DataFetching";

import Restaurant from "./Restaurant";

class RestaurantList extends Component {
  state = {
    yelpData: this.props.yelpData
  };
  componentDidMount() {
    this.props.getRestaurants();
  }

  render() {
    return (
      <>
        <h1>PROTECTED TACO ROUTE</h1>
        <div className="main-container">
          {this.props.yelpData.map(restaurant => (
            <Restaurant restaurant={restaurant} key={restaurant.id}/>
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
  { getRestaurants }
)(RestaurantList);
