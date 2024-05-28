import React , {useContext} from 'react'
import './Laptop.css';
import { Card, Button } from 'react-bootstrap';
import LaptopsData from '../../Data/LaptopData';
import { MerchandiseContext } from '../../context/MerchandiseContext';



function Laptop(props) {

  const laptopContext = useContext(MerchandiseContext);

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
            onClick={() => {
              let allLaptopsArray = [...LaptopsData[0].infos,
              ...LaptopsData[1].infos,
              ...LaptopsData[2].infos,
              ...LaptopsData[3].infos,
              ...LaptopsData[4].infos,
              ];
             
              let newLaptop = allLaptopsArray.find(x => x.id === props.id);
              laptopContext.setLaptopProduct([...laptopContext.laptopProduct, newLaptop]);
            }}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Laptop