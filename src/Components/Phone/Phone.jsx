import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Phone.css';
import { MerchandiseContext } from '../../context/MerchandiseContext';
import PhonesData from '../../Data/PhoneData';


function Phone(props) {

  const phoneContext = useContext(MerchandiseContext);




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
          <Button variant="primary" onClick={() => {
            console.log('Moji');
            let allPhoneArray = [
              ...PhonesData[0].infos,
              ...PhonesData[1].infos,
              ...PhonesData[2].infos,
              ...PhonesData[3].infos,
            ];

            let newPhone = allPhoneArray.find(x => x.id === props.id);
            phoneContext.setPhoneProduct([...phoneContext.phoneProduct, newPhone]);
          }}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Phone