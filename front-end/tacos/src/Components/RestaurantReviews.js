import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getReviews } from '../Actions/DataFetching';

class RestaurantReviews extends Component {
    constructor(props){
        super();
    }
    //oppportunity to just get individual reviews here if you call the function on the index orf the restaurant

    componentDidMount(){
        const id = this.props.match.params.id;
        console.log(this.restaurant);
        this.props.getReviews(id)
    }

    
    render() {
    // const id = props.match.params.id
    // const reviews = props.reviews.find
        return (
            
            <div className="review-container">
            <div className="review-container-sidebar">
                
            </div>
                <Link to="/restaurants"><button>Back</button></Link>
                <h1>{this.props.reviews.title}</h1>
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