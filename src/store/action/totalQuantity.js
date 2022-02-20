
export const totalQuantity = (quantity, path) => {

    return {
        type: "TOTAL_QUANTITY",
        quantity: quantity,
        path
    };
};

export const headerCartQuantity = (quantity, path) => {
    return {
        type: "HEADER_CART_QUANTITY",
        quantity: quantity,
        path
    };
}

