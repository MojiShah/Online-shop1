import React, { useContext } from 'react';
import Phone from './Phone';
import PhonesData from '../../Data/PhoneData';
import ProductsTable from '../ProductsTable/ProductsTable';
import './PhoneContainer.css';
import { MerchandiseContext } from '../../context/MerchandiseContext';

function PhoneContainer() {
    
    const productContext = useContext(MerchandiseContext);

    return (
        <>
            <div className="select">
                Please select your favorite Cell Phone.
            </div>
            
            {
                PhonesData.map(PhoneData => {
                    return (
                        <div className="phone-container" key={(PhoneData.infos.length)*Math.random()*10}>
                            <h1>{PhoneData.title} <hr /></h1>
                            {PhoneData.infos.map(y => <Phone 
                                key={(y.id)*Math.random()}
                                {...y}
                            />)}
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
                    <ProductsTable 
                        // phone={productContext.phoneProduct} 
                    />
                )
            }
        </>
    )
}

export default PhoneContainer