import React, { useEffect } from 'react';
import "./ProcessStatus.css"
import { useState } from 'react';
import EstimatedTime from '../EstimatedTime/EstimatedTime';
import DeliveredOrders from '../DeliveredOrders/DeliveredOrders';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const ProcessStatus = ({ status, state, items }) => {

    const [view, setView] = useState(false)

    const navigate = useNavigate()


    const restaurantName = localStorage.getItem("restaurantName")
    const deliveryAddress = JSON.parse(localStorage.getItem("deliveryAddress"))

    let subTotal = Math.floor(items?.grand_total - (items?.grand_total / 100 * 2))



    return (
        <div className='ProcessStatus'>
            <div className="row justify-content-center g-4">
                <div className="col-lg-4 col-12">
                    {
                        status !== "delivered" ?
                            <EstimatedTime status={status} />
                            :
                            <DeliveredOrders />
                    }
                </div>
                <div className="col-lg-4 col-12">
                    <div className="order_details_info">
                        <div style={{ padding: "30px 30px 0" }}>
                            <h5 className='fw-bold second_title mb-4'>Order Details</h5>
                            <div className="col-12 d-flex justify-content-between">
                                <p className='second_title col-6'>Order Number</p>
                                <p className='second_title fw-bold' style={{ textAlign: "right" }} >{items?.order_number}</p>
                            </div>
                            <div className="col-12 d-flex justify-content-between">
                                <p className='second_title col-6'>You order from</p>
                                <p className='second_title fw-bold col-6' style={{ textAlign: "right" }}>{restaurantName}</p>
                            </div>
                            <div className="col-12 d-flex justify-content-between">
                                <p className='second_title col-6'>Delivery Address</p>
                                <p className='second_title fw-bold col-6' style={{ textAlign: "right" }}>{deliveryAddress?.appartment_no}, {deliveryAddress?.address}</p>
                            </div>
                            <div className="col-12 d-flex justify-content-between">
                                <p className='second_title'>Total</p>
                                <p className='second_title fw-bold text-right'>tk {items?.grand_total}</p>
                            </div>
                        </div>
                        <hr />
                        <div className='ProcessStatus_viewDetails d-flex justify-content-between align-items-center'>
                            <p className='fw-bold'>View Details ({items?.item_count})
                            </p>
                            {view ? <i className="fas fa-angle-up" onClick={() => setView(false)}></i>
                                :
                                <i className="fas fa-angle-down" onClick={() => setView(true)}></i>
                            }

                        </div>
                        {
                            view && items?.order_items &&

                            <div className='ProcessStatus_viewDetails_wrapper'>
                                {
                                    items?.order_items?.map(pd =>
                                        <div className="col-12 d-flex justify-content-between">
                                            <p className='second_title'>
                                                <span className='me-3 fw-bold'>{pd?.quantity}X</span>
                                                <span>{pd?.item?.name}</span>
                                            </p>
                                            <p className='second_title fw-bold text-right'>tk {pd?.item?.price}</p>
                                        </div>
                                    )
                                }


                                <hr />

                                <div className="col-12 d-flex justify-content-between">
                                    <p className='second_title'>
                                        Subtotal
                                    </p>
                                    <p className='second_title fw-bold text-right'>tk {subTotal}</p>
                                </div>
                                <div className="col-12 d-flex justify-content-between">
                                    <p className='second_title'>
                                        Delivery Fee
                                    </p>
                                    <p className='second_title fw-bold text-right'>tk 12</p>
                                </div>
                                <div className="col-12 d-flex justify-content-between">
                                    <p className='second_title fw-bold'>
                                        Total (Inc. VAT)
                                    </p>
                                    <p className='second_title fw-bold text-right'>tk {items?.grand_total}</p>
                                </div>
                                <hr />

                                <p className='second_title fw-bold'>
                                    Paid with
                                </p>
                                <div className="col-12 d-flex justify-content-between">
                                    <p><i class="fas fa-university me-2"></i> Online payment</p>
                                    <p className='second_title fw-bold text-right'>180tk</p>
                                </div>
                            </div>
                        }

                    </div>

                    <div className="ProcessStatus_help">
                        <h5>Need Support?</h5>
                        <p>Questions regarding your order? Reach out to us.</p>
                        <div className='d-flex justify-content-center mt-4'>
                            <button onClick={() => navigate("/user/help")}>HELP CENTER</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProcessStatus;