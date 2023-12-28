import React, { useEffect, useState } from 'react';
import Laptop from './Laptop';
import LaptopData from '../../Data/LaptopData';
import { Table } from 'react-bootstrap';
import './LaptopContainer.css';
import ProductsTable from '../ProductsTable/ProductsTable';

function PhoneContainer(props) {
    let laptopDataArray = Object.entries(LaptopData);
    const [laptopProduct, setLaptopProduct] = useState([]);

    useEffect(() => {
        console.log(laptopProduct);
    }, [laptopProduct])

    function addProduct(id) {
        let allLaptopsArray = [...laptopDataArray[0][1],
        ...laptopDataArray[1][1],
        ...laptopDataArray[2][1],
        ...laptopDataArray[3][1],
        ...laptopDataArray[4][1],
        ];


        let newLaptop = allLaptopsArray.find(x => x.id === id);
        console.log(id);
        console.log(allLaptopsArray);
        console.log(newLaptop);
        setLaptopProduct([...laptopProduct, newLaptop]);

    }

    return (
        <>
            <div className="select">
                Please select your favorite Laptop.
            </div>

            {
                laptopDataArray.map(x => {
                    return (
                        <div className="laptop-container">
                            <h1>{x[0]} <hr /></h1>
                            {x[1].map(y => <Laptop
                                key={(y.id) * Math.random()}
                                {...y}
                                OnaddProduct={addProduct}
                            />)}
                        </div>
                    )
                }
                )
            }


            {
                laptopProduct.length &&(
                    <ProductsTable laptop={laptopProduct}/>
                )
            }


            {/* {
                laptopProduct.length && (
                    <div className="table container">
                        <Table striped bordered hover size="sm" variant='dark'>
                            <thead>
                                <tr>
                                    <th style={{ width: '75px', textAlign: 'center' }}>Number</th>
                                    <th>Product Name</th>
                                    <th>Product Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {laptopProduct.map(x => (
                                    < tr key={(x.id) * 10 * Math.random()}>
                                        <td>1</td>
                                        <td>Laptop : {x.name}</td>
                                        <td>{x.price} Tomans</td>
                                    </tr >
                                ))}

                            </tbody>
                        </Table>
                    </div>
                )
            } */}
        </>
    )
}

export default PhoneContainer

