import React from 'react';
import Furniture from './Furniture';
import FurnitureData from '../../Data/FurnitureData';
import './FurnitureContainer.css';

function PhoneContainer() {
    let furnitureDataArray = Object.entries(FurnitureData);

    return (
        <>
            <div className="select">
                Please select your favorite Furniture.
            </div>

            {
                furnitureDataArray.map(x => {
                    return (
                        <div className="furniture-container">
                            <h1>{x[0]} <hr /></h1>
                            {x[1].map(y => <Furniture
                                key={(y.id) * Math.random()}
                                {...y}
                            />)}
                        </div>
                    )
                }
                )

            }
        </>
    )
}

export default PhoneContainer