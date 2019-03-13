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
    
    this.props.getReviews(id);
  }

  render() {
    return (
      <div className="review-container">
        
        {this.props.reviews.map(review => (
            <Review review={review} key={review.id}/>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews,
  restaurants: state.restaurants
});

export default connect(
  mapStateToProps,
  { getReviews }
)(RestaurantReviews);
