import React, { useEffect, useState,useContext} from 'react';
import { Table } from 'react-bootstrap';
import './ProductsTable';
import { MerchandiseContext } from '../../context/MerchandiseContext';
import LaptopsData from '../../Data/LaptopData';

function ProductsTable() {

    const productContext = useContext(MerchandiseContext);
    
    productContext.setLaptopProduct(productContext.laptopProduct);
   
    productContext.setPhoneProduct(productContext.phoneProduct);
    productContext.setSupermarketProduct(productContext.supermarketProduct);

    useEffect(()=>{
        console.log('allProducts', allProducts);
    }, [productContext.laptopProduct, productContext.phoneProduct, productContext.supermarketProduct])

    const allProducts=[
        ...productContext.laptopProduct,
        ...productContext.phoneProduct,
        ...productContext.supermarketProduct
    ];
    
    return (
        <div className="container">
            <Table striped bordered hover size="sm" variant='dark'>
                <thead>
                    <tr style={{ width: '75px', textAlign: 'center', fontSize: '25px' }}>
                        <th >Number</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                    </tr>
                </thead>
                <tbody>

                    {/* {
                        productContext.laptopProduct && (
                            productContext.laptopProduct.map(x =>
                                // console.log('x:', x);
                                < tr key={(x.id) * 10 * Math.random()} className='row1'>
                                    <td style={{ textAlign: 'center', fontSize: '25px' }}>
                                        {[...productContext.laptopProduct,
                                        ...productContext.phoneProduct,
                                        ...productContext.supermarketProduct
                                        ].length}
                                    </td>

                                    <td>
                                        <span>
                                            <img src={x.image} alt="laptop" style={{ width: '50px', height: '50px', margin: '10px' }} />
                                        </span>
                                        <span style={{ textAlign: 'center', fontSize: '20px' }}>
                                            Laptop : {x.name}
                                        </span>
                                    </td>

                                    <td style={{ textAlign: 'center', fontSize: '25px' }}>
                                        {x.price} Tomans
                                    </td>

                                </tr >

                            )
                        )
                    }

                    {
                        productContext.phoneProduct && (
                            productContext.phoneProduct.map(x =>
                                // console.log('x:', x);
                                < tr key={(x.id) * 10 * Math.random()} className='row1'>
                                    <td style={{ textAlign: 'center', fontSize: '25px' }}>
                                        {[...productContext.laptopProduct,
                                        ...productContext.phoneProduct,
                                        ...productContext.supermarketProduct
                                        ].length}
                                    </td>

                                    <td>
                                        <span>
                                            <img src={x.image} alt="laptop" style={{ width: '50px', height: '50px', margin: '10px' }} />
                                        </span>
                                        <span style={{ textAlign: 'center', fontSize: '20px' }}>
                                            Phone : {x.name}
                                        </span>
                                    </td>

                                    <td style={{ textAlign: 'center', fontSize: '25px' }}>
                                        {x.price} Tomans
                                    </td>

                                </tr >

                            )
                        )
                    }

                    {
                        productContext.supermarketProduct && (
                            productContext.supermarketProduct.map(x =>
                                // console.log('x:', x);
                                < tr key={(x.id) * 10 * Math.random()} className='row1'>
                                    <td style={{ textAlign: 'center', fontSize: '25px' }}>
                                        {[...productContext.laptopProduct,
                                            ...productContext.phoneProduct,
                                            ...productContext.supermarketProduct
                                        ].length}
                                    </td>

                                    <td>
                                        <span>
                                            <img src={x.image} alt="laptop" style={{ width: '50px', height: '50px', margin: '10px' }} />
                                        </span>
                                        <span style={{ textAlign: 'center', fontSize: '20px' }}>
                                            super product : {x.name}
                                        </span>
                                    </td>

                                    <td style={{ textAlign: 'center', fontSize: '25px' }}>
                                        {x.price} Tomans
                                    </td>

                                </tr >

                            )
                        )
                    } */}

                    {
                        allProducts && (
                            allProducts.map((x , i)=>
                                // console.log('x:', x);
                                < tr key={(x.id) * 10 * Math.random()} className='row1'>
                                    <td style={{ textAlign: 'center', fontSize: '25px' }}>
                                        {i+1}
                                    </td>

                                    <td>
                                        <span>
                                            <img src={x.image} alt="laptop" style={{ width: '50px', height: '50px', margin: '10px' }} />
                                        </span>
                                        <span style={{ textAlign: 'center', fontSize: '20px' }}>
                                            Commidity : {x.name}
                                        </span>
                                    </td>

                                    <td style={{ textAlign: 'center', fontSize: '25px' }}>
                                        {x.price} Tomans
                                    </td>

                                </tr >

                            )
                        )
                    }

                </tbody>
            </Table>
        </div>

    )
}

export default ProductsTable