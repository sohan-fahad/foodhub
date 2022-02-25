import React from 'react';
import "./DeliveredOrders.css"

const DeliveredOrders = () => {
    return (
        <div className='DeliveredOrders'>
            <p className='text-align second_ti tle'>Your order has been delivered</p>
            <h3 className='fw-bold first_title'>Delivered</h3>
            <div>
                <img src="https://img.icons8.com/cotton/128/000000/delivery-person.png" />
            </div>
        </div>
    );
};

export default DeliveredOrders;