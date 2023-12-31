import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Phone.css';

function Phone(props) {
  return (
    <>
      <Card className='card'>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bold' }}>{props.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <span style={{ marginRight: '30px', fontSize: '15px', fontWeight: 'bold' }}> 
            {props.price} Tomans
          </span>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Phone