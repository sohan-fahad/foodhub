import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { useNavigate } from 'react-router';
import totalPrice from '../store/action/totalPrice';
import { totalQuantity } from '../store/action/totalQuantity';
// import totalQuantity from '../store/action/totalQuantity';
import useAuthentication from './useAuthentication';

const useCartCalculation = () => {
    const [cartList, setCartList] = useState([])
    const [quantity, setQuantity] = useState(0)

    const { control, setControl } = useAuthentication()
    const navigate = useNavigate()
    const location = useLocation()
    const { id } = useParams()

    let priceObj = {}
    let quantityObj = {}
    let deliveryFee = 12
    const dispatch = useDispatch()
    let itemsArray = []

    useEffect(() => {
        itemsArray = JSON.parse(localStorage.getItem("cartItems"))
        const restaurantId = JSON.parse(localStorage.getItem("rstid"))
        setCartList(itemsArray)
        if (cartList) {
            if (restaurantId == id || location.pathname === "/user/checkout") {
                cartList.forEach(pd => {
                    priceObj[`item${pd?.itemId}`] = pd?.subTotal
                    quantityObj[`item${pd?.itemId}`] = pd?.itemQuantity
                });
                dispatch(totalPrice(priceObj, deliveryFee))
                dispatch(totalQuantity(quantityObj, location?.pathname))
            }
            else {
                localStorage.removeItem("cartItems")
                localStorage.removeItem("qtnty")
                dispatch(totalQuantity({}, ""))
            }
        }
        else {
            JSON.stringify(localStorage.setItem("rstid", id))
        }
        controllerState()

    }, [!control])

    //this function use for controlling infinite rendering
    const controllerState = useCallback(() => {
        setControl(state => !control)
    }, [])


    // this function for increment-decrement item quantity and set the value in local store
    const handleQuantity = async (action, itemID) => {

        let items = await JSON.parse(localStorage.getItem("cartItems"))
        let item = await items.find(pd => pd.itemId === itemID)
        let itemIndex = cartList.findIndex(pd => pd.itemId === itemID)

        let itemQuantity = parseInt(document.getElementById(`item${itemID}`).value)


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

    const handleCheckoutPath = () => {
        localStorage.setItem("exptPth", "/user/checkout")
        navigate("/user/checkout")
    }

    return {
        cartList,
        deliveryFee,
        handleQuantity,
        handleCheckoutPath,
        priceObj,
        quantity
    };
};

export default useCartCalculation;