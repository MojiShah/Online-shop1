import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Supermarket.css';
import SupermarketDatas  from '../../Data/SupermarketDatas';
import { MerchandiseContext } from '../../context/MerchandiseContext';

function Supermarket({ id, image, name, price }) {
  let superProductContext = useContext(MerchandiseContext);
  return (
    <>

      <Card className='card'>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bold' }}>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <span style={{ marginRight: '30px', fontSize: '15px', fontWeight: 'bold' }}> {price} Tomans</span>
          <Button
            variant="primary"
            onClick={() => {
              let newSuperProduct = SupermarketDatas.find(x => x.id == id);
              superProductContext.setSupermarketProduct([...superProductContext.supermarketProduct, newSuperProduct]);
            }}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Supermarket