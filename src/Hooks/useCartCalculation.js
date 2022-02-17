import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import totalPrice from '../store/action/totalPrice';
import useAuthentication from './useAuthentication';

const useCartCalculation = () => {
    const [cartList, setCartList] = useState([])
    const [quantity, setQuantity] = useState(0)

    const { control, setControl } = useAuthentication()


    let priceObj = {}
    let deliveryFee = 12
    const dispatch = useDispatch()
    let itemsArray = []

    useEffect(() => {
        itemsArray = JSON.parse(localStorage.getItem("cartItems"))
        setCartList(itemsArray)
        if (cartList) {
            cartList.forEach(pd => {
                priceObj[`item${pd?.id}`] = pd?.subTotal
            });
            dispatch(totalPrice(priceObj, deliveryFee))
            controllerState()
        }

    }, [!control])

    //this function use for controlling infinite rendering
    const controllerState = useCallback(() => {
        setControl(state => !control)
    }, [])


    // this function for increment-decrement item quantity and set the value in local store
    const handleQuantity = async (id, action) => {
        let items = await JSON.parse(localStorage.getItem("cartItems"))
        let item = await items.find(pd => pd.id === id)
        let itemIndex = cartList.findIndex(pd => pd.id === id)

        let itemQuantity = parseInt(document.getElementById(`item${id}`).value)
        let avgSubTotal = item.subTotal / itemQuantity

        if (action === "increment") {
            itemQuantity = itemQuantity + 1
            item.itemQuantity = itemQuantity
            item.subTotal = itemQuantity * avgSubTotal
            items[itemIndex] = item
            localStorage.setItem("cartItems", JSON.stringify(items))
        }

        else if (action === "decrement" && itemQuantity <= 1) {
            items.splice(itemIndex, 1)
            localStorage.setItem("cartItems", JSON.stringify(items))
            if (items.length === 0) {
                localStorage.removeItem("cartItems")
            }
        }

        else if (action === "decrement") {
            itemQuantity = itemQuantity - 1
            item.itemQuantity = itemQuantity
            item.subTotal = itemQuantity * avgSubTotal
            items[itemIndex] = item
            localStorage.setItem("cartItems", JSON.stringify(items))
        }
        setControl(!control)
    }
    return {
        cartList,
        deliveryFee,
        handleQuantity,
        priceObj,
        quantity
    };
};

export default useCartCalculation;