import React from 'react'
import './Laptop.css';
import { Card, Button } from 'react-bootstrap';


function Laptop(props) {

  function ClickHandler(id){
    props.OnaddProduct(id);
  }

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
          <Button
            variant="primary"
            onClick={() => ClickHandler(props.id)}>
            Add to Cart</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Laptop