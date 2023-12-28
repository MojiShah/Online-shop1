import React from 'react';
import Phone from './Phone';
import PhoneData from '../../Data/PhoneData';
import './PhoneContainer.css';

function PhoneContainer() {
    let phoneDataArray = Object.entries(PhoneData);

    return (
        <>

            <div className="select">
                Please select your favorite Cell Phone.
            </div>

            {
                phoneDataArray.map(x => {
                    return (
                        <div className="phone-container" key={(x[1].length)*Math.random()*10}>
                            <h1>{x[0]} <hr /></h1>
                            {x[1].map(y => <Phone 
                                key={(y.id)*Math.random()}
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