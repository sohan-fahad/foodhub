

const totalPrice = (subtotal, deliveryFee) => {
    return {
        type: "TOTAL",
        payload: subtotal,
        deliveryFee
    };
};

export default totalPrice;