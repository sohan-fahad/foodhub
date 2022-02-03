import React from 'react';
import "./CorporateContactStatics.css"
import StaticComponent from './StaticComponent';

const CorporateContactStatics = () => {

    const contactStatic = [
        {
            "id": 1,
            "question": "Where is my order? ",
            "answer": "start preparing your food. Our restaurants do everything they can to get your food delivered as quickly as possible. However, heavy traffic or unexpectedly high demand may cause delays to your food delivery. Please bear with us. If it’s been too long, you can contact us and we will find out what’s going on immediately."
        },
        {
            "id": 2,
            "question": "I have a voucher code. How can I use it? ",
            "answer": "If you have a voucher code, you can redeem it after selecting a restaurant and adding items to your basket. You will see a field to enter your voucher code on the order overview page. If the voucher is valid, the discount on your order will be calculated immediately. Only one voucher can be used per order. If your voucher code does not work, please try it on a different browser Otherwise, contact us and we will be happy to assist you. "
        },
        {
            "id": 3,
            "question": "Are there any discounts available at foodhub right now? ",
            "answer": "Yes. foodhub offers different discounts at restaurants. If you want to view them all, browse our partner vendors today!"
        }
    ]
    return (
        <div className='CorporateContactStatics'>
            <div className="container">
                <div className="CorporateContactStatics_wrapper">
                    <h3 className='mb-5'>Top Questions</h3>
                    {
                        contactStatic.map(pd => <StaticComponent key={pd?.id} content={pd} />)
                    }
                </div>
                <div className="CorporateContactStatics_wrapper">
                    <h3 className='my-5'>Ordering</h3>
                    {
                        contactStatic.map(pd => <StaticComponent key={pd?.id} content={pd} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default CorporateContactStatics;