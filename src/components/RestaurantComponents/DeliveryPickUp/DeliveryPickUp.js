import React from 'react';
import "./DeliveryPickUp.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delivery, pickUp } from '../../../store/action/deliverState';
import store from "../../../store/store"

const DeliveryPickUp = () => {
    const state = useSelector(state => state.deliverReducers)
    const dispatch = useDispatch()

    return (
        <div className='DeliveryPickUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="row g-3">
                            <div className="col-6">
                                <div className="DeliveryPickUp_wrapper" onClick={() => dispatch(delivery())}>
                                    <div className="delivery">
                                        <h3>Delivery</h3>
                                    </div>
                                    <div className={state?.deliveryStatus === "delivery" ? 'isActiveDelivery' : 'delivery_overlay'} ></div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="DeliveryPickUp_wrapper" onClick={() => dispatch(pickUp())}>
                                    <div className="pickup">
                                        <h3>Pick-Up</h3>
                                    </div>
                                    <div className={state?.deliveryStatus === "pickup" ? 'isActiveDelivery' : 'delivery_overlay'}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryPickUp;