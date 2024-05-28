import React, { useContext } from 'react';
import Laptop from './Laptop';
import LaptopsData from '../../Data/LaptopData';
import './LaptopContainer.css';
import ProductsTable from '../ProductsTable/ProductsTable';
import { MerchandiseContext } from '../../context/MerchandiseContext';


function PhoneContainer() {

    const productContext = useContext(MerchandiseContext);

    return (
        <>
            <div className="select">
                Please select your favorite Laptop.
            </div>

            {
                LaptopsData.map(LaptopData => {
                    return (
                        <div className="laptop-container" key={LaptopData.infos.id}>
                            <h1>
                                {LaptopData.title}
                            </h1>
                            <hr />
                            {LaptopData.infos.map(info =>
                                <Laptop
                                    key={(info.id) * Math.random()}
                                    {...info}
                                />
                            )}
                        </div>
                    )
                }
                )
            }

            {
                (productContext.phoneProduct.length ||
                    productContext.laptopProduct.length)
                &&
                (
                    <ProductsTable />
                )
            }

        </>
    )
}

export default PhoneContainer

