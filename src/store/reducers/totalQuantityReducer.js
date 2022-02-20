import React from 'react';

const initialState = {}

const totalQuantityReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOTAL_QUANTITY":
            let quantity = action.quantity
            let restaurantPath = action.path
            let totalQuantity = Object.values(quantity).reduce((a, b) => a + b, 0)
            const totalQuantityObj = JSON.stringify({ totalQuantity, restaurantPath })
            localStorage.setItem("qtnty", totalQuantityObj)
            return { ...state, totalQuantity, restaurantPath }

        case "HEADER_CART_QUANTITY":
            return { ...state, headerQuantity: action.quantity, restaurantPath: action.path }
        default:
            return state
    }
};

export default totalQuantityReducer;