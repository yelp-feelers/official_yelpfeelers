import React from 'react';
import { Link } from 'react-router-dom';
import taco1 from '../taco.png';
import taco2 from '../taco2.png';
import taco3 from '../taco3.png';
import taco4 from '../taco4.png';

const Restaurant = props => {
    const tacos = [taco1, taco2, taco3, taco4];
    let random = Math.floor(Math.random()*4)
    console.log(random)
    return (
        
        <div className='restaurant-container'>
            <h2>{props.restaurant.title}</h2>
            <img src={tacos[random]}/>
            <div>
                {/* placeholders - replace with star ratings */}
                <h2>Raw Rating</h2>
                <div>{props.restaurant.id}</div>
                <h2>Adjusted Rating</h2>
                <div>{props.restaurant.id}</div>
            </div>
            {/* Figure out what identifier wil be in dataset*/}
            <Link to={`/restaurants/${props.restaurant.id}`}><button>Read the Reviews</button></Link>
        </div>
    );
};

export default Restaurant;