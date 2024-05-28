import React, { useContext } from 'react';
import Supermarket from './Supermarket';
import './SuperContainer.css'
import supermarketDatas from '../../Data/SupermarketDatas';
import { MerchandiseContext } from '../../context/MerchandiseContext';
import ProductsTable from '../ProductsTable/ProductsTable';

export default function SuperContainer() {

    const productContext = useContext(MerchandiseContext);
    return (
        <>
            <div className="select">
                Please select your favorite food.
            </div>
            <div className='super-container'>
                {supermarketDatas.map(supermarketData =>
                    <Supermarket
                        key={(supermarketData.id) * Math.random()}
                        {...supermarketData}
                    />
                )}

                {
                    (productContext.phoneProduct.length ||
                        productContext.laptopProduct.length ||
                        productContext.supermarketProduct
                    )
                    &&
                    (
                        <ProductsTable
                        // phone={productContext.phoneProduct} 
                        />
                    )
                }

            </div>
        </>
    )
}
