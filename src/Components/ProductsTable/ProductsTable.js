import React from 'react';
import {Table} from 'react-bootstrap';
import './ProductsTable';


function ProductsTable(props) {
  return (
      <Table striped bordered hover size="sm">
          <thead>
              <tr>
                  <th style={{width:'75px',textAlign:'center'}}>Number</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
              </tr>
          </thead>
          <tbody>
              {props.laptop.map(x => (
                  < tr key={(x.id) * 10 * Math.random()}>
                      <td>1</td>
                      <td>Laptop : {x.name}</td>
                      <td>{x.price} Tomans</td>
                  </tr >
              ))}
             
          </tbody>
      </Table>

    )
}

export default ProductsTable