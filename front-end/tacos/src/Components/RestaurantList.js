import React, { Component } from "react";
import { connect } from "react-redux";
import { getRestaurants } from "../Actions/DataFetching";
import { CardColumns, Spinner } from "reactstrap";

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
        {this.props.loggingIn ? (
          <div>
            {" "}
            <Spinner color="primary" />
          </div>
        ) : (
          <div>
            <h1>PROTECTED TACO ROUTE</h1>
            <div className="main-container">
              <CardColumns>
                {this.props.restaurants.map(restaurant => (
                  <Restaurant restaurant={restaurant} key={restaurant.id} />
                ))}
              </CardColumns>
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants
});

export default connect(
  mapStateToProps,
  { getRestaurants }
)(RestaurantList);
