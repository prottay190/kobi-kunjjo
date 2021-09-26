import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Poet.css';



const Poet = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const {name, image, birthyear, booksnumber, famouspoem, birthplace} = props.poet;
   
    return (
          <div className='poet-container'>
             <Card style={{ width: '22rem' }} className="box">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <h5>Birth place: {birthplace}</h5>
                    <Card.Text>
                    <h5>BirthYear: {birthyear}</h5>
                    <h5>Books Number: {booksnumber}</h5>
                    <p>Famous Poem: {famouspoem}</p>
                    </Card.Text>
                    <Button  onClick={() => props.addToCart(props.poet)} variant="primary">{element}Add To Cart</Button>
                </Card.Body>
            </Card>   
          </div>
    );
};

export default Poet;