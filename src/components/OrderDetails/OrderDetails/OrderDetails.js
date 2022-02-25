import React from 'react';
import { useEffect, useState } from 'react';
import ProcessStatus from '../ProcessStutas/ProcessStatus';
import RiderMap from '../RiderMap/RiderMap';
import useApi from "../../../Hooks/useApi"
import "./OrderDetails.css"
import { useDispatch } from 'react-redux';
import totalPrice from '../../../store/action/totalPrice';

const OrderDetails = () => {
    const [status, setStatus] = useState("")
    const [items, setItems] = useState({})

    const user = JSON.parse(localStorage.getItem("user"))
    const orderId = localStorage.getItem("order_id")

    const { foodHubAPI } = useApi()
    const dispatch = useDispatch()

    const itemsPrice = {}
    const ingredientPrice = {}

    let subTotal = 0

    useEffect(() => {
        fetch(`${foodHubAPI}/user/orders/show/${orderId}`, {
            headers: {
                "x-access-token": `${user?.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setItems(data?.payload[0])
                console.log(data);
            })
    }, [!items])





    return (
        <div className='OrderDetails'>
            <RiderMap />
            <ProcessStatus
                status={`Your order is ${items?.order_status}`}
                state={items?.order_status}
                items={items}
            />
        </div>
    );
};

export default OrderDetails;