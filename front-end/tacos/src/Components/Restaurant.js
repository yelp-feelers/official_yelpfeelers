import React from 'react';
import { Link } from 'react-router-dom';
import taco1 from '../taco.png';
import taco2 from '../taco2.png';
import taco3 from '../taco3.png';
import taco4 from '../taco4.png';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


const Restaurant = props => {
    let random = Math.floor(Math.random()*4)
    const tacos = [taco1, taco2, taco3, taco4];
    return (
        <div>
          <Card>
            <CardImg top width="25%" height="25%"src={tacos[random]} alt="a taco" />
            <CardBody>
              <CardTitle>{props.restaurant.name}</CardTitle>
              <CardSubtitle>Ratings:</CardSubtitle>
              <CardText>Raw rating: {props.restaurant.id} stars</CardText>
              <br />
              {/* the below both need to be adjusted when real data comes in  */}
              <CardText>Adjusted rating: {props.restaurant.id} stars</CardText>
              <Link to={`/restaurants/${props.restaurant.id}`}><Button>Read the Reviews</Button></Link>
            </CardBody>
          </Card>
        </div>
      );
    };
    
    
    
    
    
    


export default Restaurant;