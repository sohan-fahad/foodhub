import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import totalPrice from '../store/action/totalPrice';
import useApi from './useApi';
import useAuthentication from './useAuthentication';
import useCartCalculation from './useCartCalculation';

const useItemMapping = () => {

    const [show, setShow] = useState(false);
    const [itemDetails, setItemDetails] = useState([])
    const [itemInfo, setItemsInfo] = useState({})
    const [selectVariant, setSelectVariant] = useState({})
    const [singleVariant, setSingleVariant] = useState({})
    const [multipleVariant, setMultipleVariant] = useState({})
    const [allIngredients, setAllIngredients] = useState([])


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
                if (data.statusCode === 200) {
                    setItemsInfo(data.payload[0]);
                    itemMapping(await data.payload[0].item_mapping.item_group_mapping)
                    setShow(true)
                }
                else {
                    setShow(true)
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
    const handleVariantInput = async (id, element, price) => {
        if (document.getElementById(`${element}`).checked) {
            let ingredient = document.getElementById(`${element}`).value;
            let newIngredient = { id, ingredient, price }
            setSelectVariant(newIngredient);
        }
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
        console.log(data);
        let itemQuantity = parseInt(document.getElementById("quantityInput").value)

        const ingredientsPrice = calculateMultiIngredientPrice(ingredients)

        let subTotal = (itemQuantity * itemInfo.price) + (ingredientsPrice * itemQuantity)


        if (selectVariant.price) {
            subTotal = subTotal + (itemQuantity * selectVariant.price)
        }


        let itemData = { id: itemInfo.id, name: itemInfo.name, itemPrice: itemInfo.price, subTotal, itemQuantity, ingredients, selectVariant, restaurant: itemInfo.restaurant, ...data }

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
            let findId = items.findIndex(pd => pd.id === cartItem.id)

            if (findId === (-1)) {
                items.push(cartItem)
                localStorage.setItem("cartItems", JSON.stringify(items))
            }
            else {
                items[findId] = cartItem
                localStorage.setItem("cartItems", JSON.stringify(items))
            }
        }
        else {
            const itemArray = new Array(cartItem)
            localStorage.setItem("cartItems", JSON.stringify(itemArray))
        }
        setShow(false)
        reset()
    }



    return {
        handleShow,
        show,
        handleClose,
        handleAddCart,
        singleVariant,
        handleVariantInput,
        multipleVariant,
        handleMultiIngredient,
        handleQuantity,
        allIngredients
    }
};

export default useItemMapping;