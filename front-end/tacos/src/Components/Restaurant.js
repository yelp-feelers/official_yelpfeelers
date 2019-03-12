import React from 'react';
import { Link } from 'react-router-dom';

const Restaurant = props => {
    return (
        <div className='restaurant-container'>
            <h2>{props.restaurant.title}</h2>
            <div>
                {/* placeholders - replace with star ratings */}
                <h2>Raw Rating</h2>
                <div>{props.restaurant.id}</div>
                <h2>Adjusted Rating</h2>
                <div>{props.restaurant.id}</div>
            </div>
            {/* FIND DYNAMIC LINKS FOR REVIEW CALL */}
            <Link to={`/restaurants/${props.restaurant.id}`}><button>Read the Reviews</button></Link>
        </div>
    );
};

export default Restaurant;