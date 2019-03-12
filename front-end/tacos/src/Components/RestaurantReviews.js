import React, { Component } from 'react';
import { getReviews } from '../Actions/DataFetching';
import { connect } from 'react-redux'

class RestaurantReviews extends Component {
    
    //oppportunity to just get individual reviews here if you call the function on the index orf the restaurant
    componentDidMount(){
        getReviews()
    }

    
    render() {
    const id = props.match.params.id
    const reviews = props.reviews.find
        return (
            <div>
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    reviews: state.reviews
});

export default connect(
    mapStateToProps,
    { getReviews }
)(RestaurantReviews);