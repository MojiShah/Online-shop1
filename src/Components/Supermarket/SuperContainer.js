import React from 'react';
import Supermarkrt from './Supermarket';
import SupermarketData from './../../Data/SupermarketData';
import './SuperContainer.css'
import supermarketData from './../../Data/SupermarketData';

export default function superContainer() {
    return (
        <>
            <div className="select">
                Please select your favorite food.
            </div>
            <div className='super-container'>
                {supermarketData.map(x =>
                    <Supermarkrt
                        key={(x.id) * Math.random()}
                        {...x}
                    />
                )}

            </div>
        </>
    )
}
