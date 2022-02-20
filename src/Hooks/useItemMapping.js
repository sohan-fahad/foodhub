import React, { useState } from 'react';
import { useAlert } from "react-alert";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import totalPrice from '../store/action/totalPrice';
import useApi from './useApi';
import useAuthentication from './useAuthentication';
import useCartCalculation from './useCartCalculation';

const useItemMapping = () => {

    const [show, setShow] = useState(false);
    const [itemInfo, setItemsInfo] = useState({})
    const [selectVariant, setSelectVariant] = useState({})
    const [allIngredients, setAllIngredients] = useState([])
    const [quantity, setQuantity] = useState(1)


    const { id } = useParams()


    const alert = useAlert();
    let itemId = Math.floor(Math.random() * 644457);


    // preCart will store local previous local store cart data
    const preCart = JSON.parse(localStorage.getItem("cartItems"))

    let items = []
    let ingredients = []

    const { control, setControl } = useAuthentication()

    if (preCart) {
        preCart.forEach(ingredient => {
            items.push(ingredient)

        });
    }


    const { foodHubAPI } = useApi()
    const { reset } = useForm();

    const { deliveryFee, priceObj, cartList } = useCartCalculation()

    const dispatch = useDispatch()


    // this function will close item mapping modal
    const handleClose = () => setShow(false);

    // this function will show item mapping modal
    const handleShow = async (productId, id) => {
        await fetch(`${foodHubAPI}/user/items/${productId}/${id}`)
            .then(async (res) => await res.json())
            .then(async (data) => {
                if (await data.statusCode === 200) {
                    setItemsInfo(data.payload[0]);
                    if (await data?.payload[0]?.item_mapping) {
                        itemMapping(await data.payload[0].item_mapping.item_group_mapping)
                        setShow(true)
                    }
                    else {
                        handleSingleAddCart(data.payload[0])
                    }
                }
            })

    };

    // this function will set all ingredient Group data
    const itemMapping = async (itemGroupMapping) => {
        setAllIngredients(itemGroupMapping)
    }

    // this function will increment & decrement quantity
    const handleQuantity = (action) => {
        let itemQuantity = parseInt(document.getElementById("quantityInput").value)
        if (action === "increment") {
            document.getElementById("quantityInput").value = itemQuantity + 1
        }
        if (action === "decrement" && itemQuantity > 1) {
            document.getElementById("quantityInput").value = itemQuantity - 1
        }
    }

    // this function will store single variant input value 
    const handleVariantInput = async (id) => {


        // if (document.getElementById(`${element}`).checked) {
        //     let ingredient = document.getElementById(`${element}`).value;
        //     let newIngredient = { id, ingredient, price }
        //     console.log(newIngredient);
        //     setSelectVariant(newIngredient);
        // }
        setControl(!control)
    }


    // this function will store multiple ingredient checkbox value
    const handleMultiIngredient = (id, element, price) => {
        let ingredient = document.getElementById(`${element}`).value;
        let newIngredient = { id, ingredient, price }

        if (document.getElementById(`${element}`).checked === true) {
            ingredients.push(newIngredient)
        }
        else if (document.getElementById(`${element}`).checked === false) {
            findIngredientObj(id, newIngredient)
        }
    }


    // this function for check that is selected ingredient is already or not
    function findIngredientObj(id) {
        const found = ingredients.some((el) => el.id === id);
        const indexNum = ingredients.findIndex((el) => el.id === id);
        if (found) {
            ingredients.splice(indexNum, 1)
        }
    }

    // this function will add item in cart
    const handleAddCart = (data) => {
        JSON.stringify(localStorage.setItem("rstid", id))
        let itemQuantity = parseInt(document.getElementById("quantityInput").value)

        const ingredientsPrice = calculateMultiIngredientPrice(ingredients)

        let subTotal = (itemQuantity * itemInfo.price) + (ingredientsPrice * itemQuantity)


        if (selectVariant.price) {
            subTotal = subTotal + (itemQuantity * selectVariant.price)
        }


        let itemData = { id: itemInfo.id, itemId, name: itemInfo.name, itemPrice: itemInfo.price, subTotal, itemQuantity, ingredients, selectVariant, restaurant: itemInfo.restaurant, ...data }
        handleReduxSubtotal(subTotal, itemData)
        reset()
    }

    // this function will add item in cart if item has no ingredient
    const handleSingleAddCart = (info) => {
        let subTotal = info.price
        let itemData = { id: info?.id, itemId, name: info?.name, itemPrice: info?.price, subTotal, itemQuantity: 1, restaurant: info?.restaurant }
        alert.success("Item added in cart");
        handleReduxSubtotal(subTotal, itemData)

    }

    // this function will store subtotal data in redux state
    const handleReduxSubtotal = (subTotal, itemData) => {

        handleLocalStorageCart(itemData)

        if (!cartList) {
            dispatch(totalPrice({ subTotal }, deliveryFee))
        }
        else {
            dispatch(totalPrice(priceObj, deliveryFee))
        }
        setControl(!control)
    }


    // this function calculating multiple ingredient price
    const calculateMultiIngredientPrice = (ingredientItems) => {
        let price = 0;
        ingredientItems.forEach(element => {
            price = price + element.price
        });

        return price
    }

    // this function save item in local store with ingredient
    const handleLocalStorageCart = (cartItem) => {
        if (preCart) {
            let findArrayIndex = items.findIndex(pd => pd.id === cartItem.id)
            let findItem = items.find(pd => pd?.selectVariant?.id == cartItem?.selectVariant?.id)

            let findVariantIndex = items.findIndex(pd => pd?.selectVariant?.id == cartItem?.selectVariant?.id)

            if (!findItem && findArrayIndex !== (-1)) {
                items.push(cartItem)
            }

            else if (findArrayIndex === (-1)) {
                items.push(cartItem)
            }
            else if (findItem && findVariantIndex !== (-1)) {
                const sortArr1 = findItem?.ingredients.sort(function (a, b) { return a?.id - b?.id })
                const sortArr2 = cartItem?.ingredients.sort(function (a, b) { return a?.id - b?.id })

                const arr1 = JSON.stringify(sortArr1)
                const arr2 = JSON.stringify(sortArr2)
                if (arr1 === arr2) {
                    items[findVariantIndex] = cartItem
                }
                else {
                    items.push(cartItem)
                }
            }
            else {
                console.log("+1");
                items[findArrayIndex] = cartItem
            }
            localStorage.setItem("cartItems", JSON.stringify(items))
        }
        else {
            const itemArray = new Array(cartItem)
            localStorage.setItem("cartItems", JSON.stringify(itemArray))
        }
        setShow(false)
    }



    return {
        handleShow,
        show,
        handleClose,
        handleAddCart,
        handleVariantInput,
        handleMultiIngredient,
        handleQuantity,
        allIngredients
    }
};

export default useItemMapping;