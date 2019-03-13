import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getReviews } from "../Actions/DataFetching";
import Review from './Review'

class RestaurantReviews extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(this.restaurant);
    this.props.getReviews(id);
  }

  render() {
    return (
      <div className="review-container">
        <div className="review-container-sidebar" />
        <Link to="/restaurants">
          <button>Back</button>
        </Link>
        {this.props.reviews.map(review => (
            <Review review={review} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews,
  yelpData: state.yelpData
});

export default connect(
  mapStateToProps,
  { getReviews }
)(RestaurantReviews);
